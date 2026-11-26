"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipForward } from "lucide-react";
import type { Track } from "@/data/profile";

interface MusicPlayerProps {
  tracks: Track[];
}

const WAVEFORM_BARS = [
  10, 16, 8, 20, 14, 24, 12, 18, 26, 10, 16, 22, 12, 26, 14, 18, 10, 22, 16, 12,
];

export function MusicPlayer({ tracks }: MusicPlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[trackIndex] ?? {
    title: "End of Beginning",
    artist: "Djo",
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && currentTrack.src) {
      audio.play().catch(() => {
        // Keep visual playback responsive even if audio file isn't present yet
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, trackIndex, currentTrack.src]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  function handleTogglePlay() {
    setIsPlaying((prev) => !prev);
  }

  function handleNext() {
    if (tracks.length === 0) return;
    setElapsedSeconds(0);
    setTrackIndex((prev) => (prev + 1) % tracks.length);
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 px-6 py-5 sm:py-6">
      {currentTrack.src && (
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleNext}
          preload="none"
        />
      )}

      {/* Left: Glossy Vinyl + Tonearm + Track Metadata */}
      <div className="flex min-w-0 items-center gap-5">
        <div className="relative h-16 w-16 shrink-0">
          {/* Tonearm */}
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className={`pointer-events-none absolute -top-1 -right-2 z-10 h-8 w-8 origin-[26px_7px] transition-transform duration-500 ease-out ${
              isPlaying ? "rotate-[16deg]" : "rotate-0"
            }`}
            fill="none"
          >
            <circle cx="26" cy="7" r="3" fill="#71717a" />
            <path
              d="M26 7L14 14.5L11 16"
              stroke="#71717a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="11" cy="16" r="2" fill="#22c55e" />
          </svg>

          {/* Glossy Vinyl Disc */}
          <div
            className={`relative flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-950 shadow-md ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "4s" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 40deg, rgba(255,255,255,0.2) 0deg, transparent 55deg, rgba(255,255,255,0.14) 180deg, transparent 235deg, rgba(255,255,255,0.2) 360deg)",
              }}
            />
            <div className="absolute inset-1.5 rounded-full border border-zinc-800/80" />
            <div className="absolute inset-3 rounded-full border border-zinc-800/60" />
            <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-red-600 shadow-inner">
              <div className="h-1 w-1 rounded-full bg-zinc-950" />
            </div>
          </div>
        </div>

        {/* Track Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                isPlaying ? "animate-pulse bg-[#1db954]" : "bg-zinc-500"
              }`}
            />
            <span className="text-xs text-zinc-400">Favorite</span>
          </div>
          <p className="truncate text-base font-semibold text-zinc-100">
            {currentTrack.title}
          </p>
          <p className="truncate text-sm text-zinc-400">
            {currentTrack.artist}
          </p>
        </div>
      </div>

      {/* Right: Smooth Single-Layer Expanding Pill + Next Button */}
      <div className="flex shrink-0 items-center gap-2.5">
        <div className="group relative">
          {!isPlaying && (
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-200 opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
              Play
            </span>
          )}

          <div
            className={`flex h-10 items-center overflow-hidden rounded-full bg-[#1db954] pl-1 text-white shadow-sm transition-[padding,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#1ed760] ${
              isPlaying ? "pr-3.5" : "pr-1"
            }`}
          >
            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause track" : "Play track"}
              className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isPlaying
                  ? "border-white/35 bg-white/10 hover:bg-white/20"
                  : "border-transparent bg-transparent"
              }`}
            >
              <Play
                className={`absolute ml-0.5 h-4 w-4 fill-current transition-all duration-200 ${
                  isPlaying
                    ? "scale-50 opacity-0"
                    : "scale-100 opacity-100"
                }`}
              />
              <Pause
                className={`absolute h-3.5 w-3.5 fill-current transition-all duration-200 ${
                  isPlaying
                    ? "scale-100 opacity-100"
                    : "scale-50 opacity-0"
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-columns,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isPlaying
                  ? "grid-cols-[1fr] opacity-100"
                  : "grid-cols-[0fr] opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="hidden h-7 items-center gap-[3px] pl-2.5 sm:flex"
                >
                  {WAVEFORM_BARS.map((height, idx) => (
                    <span
                      key={idx}
                      className="w-[2.5px] animate-pulse rounded-full bg-white/95"
                      style={{
                        height: `${height}px`,
                        animationDelay: `${(idx % 5) * 120}ms`,
                        animationDuration: "900ms",
                      }}
                    />
                  ))}
                </div>

                <span className="min-w-[2ch] pl-2 font-mono text-xs font-semibold tabular-nums sm:pl-0">
                  {elapsedSeconds}s
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next track"
          title="Next track"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          <SkipForward className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
