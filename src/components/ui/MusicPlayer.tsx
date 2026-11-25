"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipForward } from "lucide-react";
import type { Track } from "@/data/profile";

interface MusicPlayerProps {
  tracks: Track[];
}

export function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[trackIndex] ?? {
    title: "The Less I Know the Better",
    artist: "Tame Impala",
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && currentTrack.src) {
      audio.play().catch(() => {
        // Ignore autoplay or missing-file errors; keep visual vinyl state responsive
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, trackIndex, currentTrack.src]);

  function handleTogglePlay() {
    setIsPlaying((prev) => !prev);
  }

  function handleNext() {
    if (tracks.length === 0) return;
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  }

  return (
    <div className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-4 py-3.5">
      {currentTrack.src && (
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleNext}
          preload="none"
        />
      )}

      {/* Left: Vinyl Disc + Tonearm + Track Info */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="relative h-12 w-12 shrink-0">
          {/* Tonearm */}
          <svg
            viewBox="0 0 28 28"
            aria-hidden="true"
            className={`pointer-events-none absolute -top-1.5 -right-1.5 z-10 h-7 w-7 origin-[22px_5px] text-zinc-400 transition-transform duration-300 ${
              isPlaying ? "rotate-18" : "rotate-0"
            }`}
            fill="none"
          >
            <circle cx="22" cy="5" r="2.2" fill="currentColor" />
            <path
              d="M22 5L14 15.5L11.5 18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <rect
              x="9.5"
              y="17"
              width="3.5"
              height="2.2"
              rx="0.6"
              transform="rotate(-35 9.5 17)"
              fill="#10b981"
            />
          </svg>

          {/* Vinyl Record */}
          <div
            className={`relative flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950 shadow-inner ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "4s" }}
          >
            {/* Vinyl Grooves */}
            <div className="absolute inset-1 rounded-full border border-zinc-800/80" />
            <div className="absolute inset-2 rounded-full border border-zinc-800/60" />
            <div className="absolute inset-3 rounded-full border border-zinc-800/50" />
            {/* Red Center Label */}
            <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-red-600">
              <div className="h-1 w-1 rounded-full bg-zinc-950" />
            </div>
          </div>
        </div>

        {/* Track Metadata */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isPlaying ? "animate-pulse bg-emerald-400" : "bg-emerald-500"
              }`}
            />
            <span className="font-mono text-[11px] text-zinc-400">
              {isPlaying ? "Now Playing" : "Favorite"}
            </span>
          </div>
          <p className="truncate text-sm font-semibold text-zinc-100">
            {currentTrack.title}
          </p>
          <p className="truncate text-xs text-zinc-400">
            {currentTrack.artist}
          </p>
        </div>
      </div>

      {/* Right: Play/Pause + Next Controls */}
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? "Pause track" : "Play track"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 fill-current" />
          ) : (
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          )}
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next track"
          title="Next track"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/70 text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          <SkipForward className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
