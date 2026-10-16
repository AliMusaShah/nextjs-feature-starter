import { cn } from "cn"

import {
  LeaderboardRow,
  type LeaderboardEntry,
} from "@/components/ui/leaderboard-row"

type LeaderboardTableProps = {
  entries: LeaderboardEntry[]
  showMedals?: boolean
  emptyMessage?: string
  className?: string
}

function LeaderboardTable({
  entries,
  showMedals,
  emptyMessage = "No scores yet.",
  className,
}: LeaderboardTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border-[0.6px] border-outline/22",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-12.75 items-center justify-between gap-2 bg-brand-tertiary px-3 text-sm leading-none font-medium text-brand-foreground sm:text-base"
      >
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:w-65 sm:flex-none sm:gap-11.5">
          <span className="w-13 shrink-0 text-center sm:w-14.25">Position</span>
          <span>Name</span>
        </div>
        <span className="w-14 shrink-0 text-center sm:w-24">Points</span>
        <span className="w-14 shrink-0 pr-1.5 text-right sm:w-24">Streak</span>
      </div>
      {entries.length > 0 ? (
        <ol>
          {entries.map((entry, index) => (
            <LeaderboardRow
              key={entry.id}
              entry={entry}
              position={index + 1}
              showMedals={showMedals}
            />
          ))}
        </ol>
      ) : (
        <p className="px-3 py-6 text-center text-sm text-outline">
          {emptyMessage}
        </p>
      )}
    </div>
  )
}

export { LeaderboardTable }
