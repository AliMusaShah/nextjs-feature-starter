import Image from "next/image"
import Link from "next/link"
import { cva } from "class-variance-authority"

import type { GameTileData } from "../types/dashboard-types"

const gameImageVariants = cva("shrink-0 object-cover", {
  variants: {
    size: {
      sm: "size-15",
      lg: "size-17",
    },
    framed: {
      true: "rounded-full border border-arena-ring",
      false: "",
    },
  },
  defaultVariants: {
    size: "lg",
    framed: false,
  },
})

type GameTileProps = {
  game: GameTileData
}

function GameTile({ game }: GameTileProps) {
  const pixelSize = game.imageSize === "sm" ? 60 : 68

  return (
    <Link
      href={game.href}
      className="flex w-full flex-col justify-center overflow-clip rounded-card border border-outline/12 bg-game-tile px-1.5 py-4 shadow-tile outline-none transition-[filter] hover:brightness-95 focus-visible:ring-3 focus-visible:ring-brand/40"
    >
      <span className="flex flex-col items-start justify-center gap-3.25 px-2 py-3">
        <Image
          src={game.image}
          alt=""
          width={pixelSize}
          height={pixelSize}
          className={gameImageVariants({
            size: game.imageSize,
            framed: game.framed ?? false,
          })}
        />
        <span className="text-lg leading-none font-medium text-brand-secondary/70 capitalize">
          {game.label}
        </span>
      </span>
    </Link>
  )
}

export { GameTile }
