import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Insights() {
  return (
    <MotionSection id="insights" className="border-t border-zinc-800/60 py-14">
      {/* Header Row */}
      <div className="flex items-end justify-between gap-4">
        <SectionHeading eyebrow="Analytics" title="Insights" />
        <span className="mb-8 text-xs text-zinc-400">Last 7 days</span>
      </div>

      {/* Main Analytics Card */}
      <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-5 sm:p-6">
        {/* Top Stat Boxes */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-5 py-4">
            <p className="text-xs text-zinc-400">Visitors</p>
            <div className="mt-1.5 flex items-baseline gap-2.5">
              <span className="text-2xl font-bold tracking-tight text-zinc-50 tabular-nums">
                133
              </span>
              <span className="text-xs font-medium text-rose-400">
                ▼ 44.8%
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-5 py-4">
            <p className="text-xs text-zinc-400">Views</p>
            <div className="mt-1.5 flex items-baseline gap-2.5">
              <span className="text-2xl font-bold tracking-tight text-zinc-50 tabular-nums">
                466
              </span>
              <span className="text-xs font-medium text-rose-400">
                ▼ 54.9%
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-5 flex items-center gap-5 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-3 rounded-full bg-blue-500" />
            <span>Visitors</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-3 rounded-full bg-zinc-100" />
            <span>Views</span>
          </div>
        </div>

        {/* Smooth Dual-Line SVG Chart */}
        <div className="mt-3 h-40 w-full">
          <svg
            viewBox="0 0 700 150"
            preserveAspectRatio="none"
            aria-label="Visitors and views over the last 7 days"
            className="h-full w-full overflow-visible"
            fill="none"
          >
            {/* Views Line (White) */}
            <path
              d="M 10 105 C 65 20, 105 18, 155 58 C 190 88, 215 96, 255 92 C 310 86, 360 68, 415 58 C 460 50, 515 52, 560 55 C 605 58, 645 86, 690 120"
              stroke="#fafafa"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Visitors Line (Blue) */}
            <path
              d="M 10 132 C 65 118, 110 116, 165 124 C 210 130, 245 128, 300 122 C 365 115, 425 112, 480 116 C 535 120, 610 132, 690 138"
              stroke="#3b82f6"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Quote + Visitor Counter Card */}
      <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 md:grid-cols-[1fr_240px]">
        <div className="p-6 sm:p-7">
          <span
            aria-hidden="true"
            className="mb-3 block font-serif text-3xl leading-none text-zinc-500"
          >
            &ldquo;
          </span>
          <blockquote className="text-base font-semibold leading-relaxed text-zinc-100">
            We are what we repeatedly do. Excellence, then, is not an act, but a
            habit.
          </blockquote>
          <p className="mt-4 text-right text-xs text-zinc-400">
            — Will Durant
          </p>
        </div>

        <div className="flex items-center justify-center border-t border-zinc-800/80 p-6 md:border-t-0 md:border-l">
          <p className="text-sm text-zinc-400">
            You are the{" "}
            <span className="font-semibold text-zinc-100 tabular-nums">
              619
            </span>
            <sup className="ml-0.5 text-[10px]">th</sup> visitor
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
