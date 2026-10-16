import Image from "next/image"

import type { LeaderboardGame } from "../types/mcqs-types"

type LeaderboardGameFilterProps = {
  games: LeaderboardGame[]
  value: string
  onChange: (value: string) => void
}

function LeaderboardGameFilter({
  games,
  value,
  onChange,
}: LeaderboardGameFilterProps) {
  return (
    <div className="relative shrink-0">
      <select
        aria-label="Filter by game"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9.5 appearance-none rounded-[18px] border border-secondary-fixed-dim bg-primary-fixed-dim/14 py-0 pr-8 pl-3.5 text-sm text-outline shadow-ds-100 outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
      >
        <option value="">Filter by game</option>
        {games.map((game) => (
          <option key={game.value} value={game.value}>
            {game.label}
          </option>
        ))}
      </select>
      <Image
        src="/icons/select-chevron-sm.svg"
        alt=""
        width={16}
        height={16}
        className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2"
      />
    </div>
  )
}

export { LeaderboardGameFilter }
