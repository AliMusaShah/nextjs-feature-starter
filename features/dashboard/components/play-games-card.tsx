import Image from "next/image"
import Link from "next/link"

import { Card } from "@/components/ui/card"

import type { GameTileData } from "../types/dashboard-types"
import { GameTile } from "./game-tile"

type PlayGamesCardProps = {
  games: GameTileData[]
}

function PlayGamesCard({ games }: PlayGamesCardProps) {
  return (
    <Card variant="panel" className="min-w-0 flex-1">
      <div className="flex items-center justify-between gap-2 px-2">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/play-games.svg"
            alt=""
            width={38}
            height={38}
            className="size-9.5 shrink-0"
          />
          <h3 className="text-[22px] leading-none font-semibold text-brand-secondary">
            Play Games
          </h3>
        </div>
        <Link
          href="/games"
          className="rounded-md text-sm leading-none text-outline outline-none hover:underline focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          View all
        </Link>
      </div>
      <ul className="grid flex-1 auto-rows-fr grid-cols-2 gap-3 pb-3 md:grid-cols-3">
        {games.map((game) => (
          <li key={game.id} className="flex">
            <GameTile game={game} />
          </li>
        ))}
      </ul>
    </Card>
  )
}

export { PlayGamesCard }
