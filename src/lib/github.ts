export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubActivityData {
  username: string;
  totalContributions: number;
  days: ContributionDay[];
  isFallback: boolean;
}

function generateFallbackDays(): { days: ContributionDay[]; total: number } {
  const days: ContributionDay[] = [];
  const today = new Date();
  const totalDays = 52 * 7 + (today.getDay() + 1);
  let total = 0;

  for (let i = totalDays - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const iso = d.toISOString().slice(0, 10);

    // Deterministic pseudo-random pattern weighted toward active weekdays
    const seed = (i * 2654435761) % 100;
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    let count = 0;

    if (seed > (isWeekend ? 62 : 28)) {
      if (seed > 90) {
        level = 4;
        count = 9 + (seed % 5);
      } else if (seed > 75) {
        level = 3;
        count = 5 + (seed % 4);
      } else if (seed > 52) {
        level = 2;
        count = 3 + (seed % 2);
      } else {
        level = 1;
        count = 1 + (seed % 2);
      }
    }

    total += count;
    days.push({ date: iso, count, level });
  }

  return { days, total };
}

export async function getGitHubActivity(
  username: string
): Promise<GitHubActivityData> {
  if (!username || username === "yourusername") {
    const fallback = generateFallbackDays();
    return {
      username: username || "yourusername",
      totalContributions: fallback.total,
      days: fallback.days,
      isFallback: true,
    };
  }

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(
        username
      )}?y=last`,
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(2500),
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub contributions HTTP ${res.status}`);
    }

    const json = (await res.json()) as {
      total?: { lastYear?: number };
      contributions?: Array<{
        date: string;
        count: number;
        level: 0 | 1 | 2 | 3 | 4;
      }>;
    };

    const days = Array.isArray(json.contributions) ? json.contributions : [];
    if (days.length === 0) {
      throw new Error("Empty contributions payload");
    }

    const total =
      typeof json.total?.lastYear === "number"
        ? json.total.lastYear
        : days.reduce((acc, day) => acc + day.count, 0);

    return {
      username,
      totalContributions: total,
      days,
      isFallback: false,
    };
  } catch {
    const fallback = generateFallbackDays();
    return {
      username,
      totalContributions: fallback.total,
      days: fallback.days,
      isFallback: true,
    };
  }
}
