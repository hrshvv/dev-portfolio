import { NextResponse } from "next/server";

const SPOTIFY_URI_RE = /^spotify:(track|playlist):([a-zA-Z0-9]+)$/;

export interface SpotifyTrackItem {
  title: string;
  artist: string;
  uri: string;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractMetaContent(html: string, property: string): string | null {
  const escaped = property.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match =
    html.match(
      new RegExp(
        `<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']+)["']`,
        "i"
      )
    ) ??
    html.match(
      new RegExp(
        `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${escaped}["']`,
        "i"
      )
    );
  return match ? decodeHtmlEntities(match[1]) : null;
}

async function fetchTrackDetails(id: string): Promise<SpotifyTrackItem> {
  const spotifyUrl = `https://open.spotify.com/track/${id}`;
  const oembedRes = await fetch(
    `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`,
    { next: { revalidate: 86400 } }
  );
  const oembed = oembedRes.ok
    ? ((await oembedRes.json()) as { title?: string })
    : null;

  let title = oembed?.title ?? "";
  let artist = "";

  const pageRes = await fetch(spotifyUrl, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 86400 },
  });

  if (pageRes.ok) {
    const html = await pageRes.text();
    if (!title) {
      title = extractMetaContent(html, "og:title") ?? "";
    }

    const ogDescription = extractMetaContent(html, "og:description");
    if (ogDescription) {
      const parts = ogDescription.split("·").map((part) => part.trim());
      if (parts.length >= 2 && parts[0]) {
        artist = parts[0];
      }
    }

    if (!artist) {
      const titleTag = html.match(/<title>([^<]+)<\/title>/i)?.[1];
      const byMatch = titleTag?.match(/by\s+(.+?)\s*\|\s*Spotify/i);
      if (byMatch?.[1]) {
        artist = decodeHtmlEntities(byMatch[1].trim());
      }
    }
  }

  return {
    title: title || "Spotify Track",
    artist: artist || "Spotify",
    uri: `spotify:track:${id}`,
  };
}

async function fetchPlaylistTracks(id: string): Promise<SpotifyTrackItem[]> {
  const embedRes = await fetch(`https://open.spotify.com/embed/playlist/${id}`, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 3600 },
  });

  if (embedRes.ok) {
    const html = await embedRes.text();
    const nextDataMatch = html.match(
      /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/
    );
    if (nextDataMatch?.[1]) {
      try {
        const parsed = JSON.parse(nextDataMatch[1]) as {
          props?: {
            pageProps?: {
              state?: {
                data?: {
                  entity?: {
                    trackList?: Array<{
                      title?: string;
                      subtitle?: string;
                      uri?: string;
                    }>;
                  };
                };
              };
            };
          };
        };

        const trackList =
          parsed.props?.pageProps?.state?.data?.entity?.trackList ?? [];
        const tracks = trackList
          .filter((item) => item.uri?.startsWith("spotify:track:") && item.title)
          .map((item) => ({
            title: item.title as string,
            artist: item.subtitle || "Spotify",
            uri: item.uri as string,
          }));

        if (tracks.length > 0) {
          return tracks;
        }
      } catch {
        // Fall through to HTML meta fallback
      }
    }
  }

  const pageRes = await fetch(`https://open.spotify.com/playlist/${id}`, {
    headers: { "User-Agent": "Mozilla/5.0" },
    next: { revalidate: 3600 },
  });

  if (pageRes.ok) {
    const html = await pageRes.text();
    const matches = Array.from(
      html.matchAll(
        /<meta[^>]+name=["']music:song["'][^>]+content=["']https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)["']/gi
      )
    );
    const uniqueIds = Array.from(new Set(matches.map((m) => m[1]))).slice(0, 10);
    if (uniqueIds.length > 0) {
      return Promise.all(uniqueIds.map((trackId) => fetchTrackDetails(trackId)));
    }
  }

  return [];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const uri = searchParams.get("uri")?.trim() ?? "";
  const match = uri.match(SPOTIFY_URI_RE);

  if (!match) {
    return NextResponse.json({ error: "Invalid Spotify URI" }, { status: 400 });
  }

  const [, type, id] = match;

  try {
    if (type === "track") {
      return NextResponse.json(await fetchTrackDetails(id));
    }

    const tracks = await fetchPlaylistTracks(id);
    return NextResponse.json({ tracks });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch Spotify metadata" },
      { status: 502 }
    );
  }
}
