import Image from "next/image"
import { cn } from "cn"

export type LeaderboardEntry = {
  id: string
  initials: string
  name: string
  points: number
  streakDays: number
  isCurrentUser: boolean
}

const rowTints = [
  "bg-primary-fixed-dim/28",
  "bg-primary-fixed-dim/17",
  "bg-primary-fixed-dim/8",
]

const medals = [
  "/icons/medal-first.svg",
  "/icons/medal-second.svg",
  "/icons/medal-third.svg",
]

type LeaderboardRowProps = {
  entry: LeaderboardEntry
  position: number
  showMedals?: boolean
}

function LeaderboardRow({
  entry,
  position,
  showMedals = false,
}: LeaderboardRowProps) {
  const { initials, name, points, streakDays, isCurrentUser } = entry
  const medal = showMedals ? medals[position - 1] : undefined

  return (
    <li
      className={cn(
        "flex items-center justify-between gap-2 border-b-[0.6px] border-outline/18 px-3 py-4 text-sm leading-none text-outline last:border-b-0",
        rowTints[position - 1]
      )}
    >
      <div
        className={cn(
          "flex min-w-0 flex-1 items-center gap-2 sm:w-65 sm:flex-none",
          medal ? "sm:gap-5" : "sm:gap-11.5"
        )}
      >
        <span
          className={cn(
            "flex w-13 shrink-0 items-center justify-center gap-1 sm:gap-2.5",
            medal ? "sm:w-20.75" : "sm:w-14.25"
          )}
        >
          #{position}
          {medal ? (
            <Image
              src={medal}
              alt=""
              width={32}
              height={32}
              className="size-5 sm:size-8"
            />
          ) : null}
        </span>
        <div className="flex min-w-0 items-center gap-2.5 text-brand">
          <span
            aria-hidden="true"
            className="flex size-7.5 shrink-0 items-center justify-center rounded-full border-[0.938px] border-outline/12 bg-primary-fixed-dim text-[11.25px] text-brand-foreground shadow-ds-100"
          >
            {initials}
          </span>
          <span className="truncate">
            {name}
            {isCurrentUser ? " (You)" : null}
          </span>
        </div>
      </div>
      <span className="w-14 shrink-0 text-center sm:w-24">{points} XP</span>
      <span className="w-14 shrink-0 pr-1.5 text-right sm:w-24">
        {streakDays} Days
      </span>
    </li>
  )
}

export { LeaderboardRow }
