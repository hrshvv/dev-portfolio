import type { ContributionDay, GitHubActivityData } from "@/lib/github";
import { MotionSection } from "@/components/ui/MotionSection";

interface GitHubActivityProps {
  data: GitHubActivityData;
}

const LEVEL_CLASSES: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-zinc-800/80",
  1: "bg-[#0e4429]",
  2: "bg-[#006d32]",
  3: "bg-[#26a641]",
  4: "bg-[#39d353]",
};

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function groupIntoWeeks(days: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function getMonthLabels(weeks: ContributionDay[][]): string[] {
  let lastMonth = -1;
  return weeks.map((week) => {
    const first = week[0];
    if (!first) return "";
    const month = new Date(first.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_NAMES[month];
    }
    return "";
  });
}

export function GitHubActivity({ data }: GitHubActivityProps) {
  const weeks = groupIntoWeeks(data.days);
  const monthLabels = getMonthLabels(weeks);

  const firstYear = data.days[0]?.date.slice(0, 4) ?? "";
  const lastYear = data.days[data.days.length - 1]?.date.slice(2, 4) ?? "";
  const yearRange = firstYear && lastYear ? `${firstYear}–${lastYear}` : "";

  return (
    <MotionSection className="pb-16">
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          GitHub Activity
        </h2>
        <a
          href={`https://github.com/${data.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-400 transition-colors hover:text-zinc-200"
        >
          @{data.username}
        </a>
      </div>

      {/* Borderless Heatmap Directly on Page Grid */}
      <div className="overflow-x-auto pb-1">
        <div className="min-w-[650px]">
          {/* Month Labels */}
          <div className="mb-2 flex pl-8">
            {weeks.map((_, idx) => (
              <div
                key={idx}
                className="flex-1 text-[11px] text-zinc-400"
              >
                {monthLabels[idx]}
              </div>
            ))}
          </div>

          {/* Weekday Labels + 7-Row Grid */}
          <div className="flex items-stretch gap-2">
            {/* 7-row weekday rail so Mon, Wed, Fri align with rows 1, 3, 5 */}
            <div className="grid w-6 shrink-0 grid-rows-7 gap-[3px] text-[10px] leading-none text-zinc-400">
              <span />
              <span className="flex items-center">Mon</span>
              <span />
              <span className="flex items-center">Wed</span>
              <span />
              <span className="flex items-center">Fri</span>
              <span />
            </div>

            {/* Contribution Squares with Subtle Left Fade */}
            <div
              className="grid flex-1 grid-flow-col gap-[3px]"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0px, black 22px, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0px, black 22px, black 100%)",
              }}
            >
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                  {week.map((day) => (
                    <div
                      key={day.date}
                      title={`${day.count} contribution${
                        day.count === 1 ? "" : "s"
                      } on ${day.date}`}
                      className={`h-[10px] w-[10px] rounded-[2.5px] ${
                        LEVEL_CLASSES[day.level]
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.12em] text-zinc-400">
        <span>
          <strong className="font-semibold text-zinc-200">
            {data.totalContributions}
          </strong>{" "}
          Contributions{yearRange ? ` · ${yearRange}` : ""}
        </span>

        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex items-center gap-1">
            {([0, 1, 2, 3, 4] as const).map((lvl) => (
              <span
                key={lvl}
                className={`h-2.5 w-2.5 rounded-[2px] ${LEVEL_CLASSES[lvl]}`}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </MotionSection>
  );
}
