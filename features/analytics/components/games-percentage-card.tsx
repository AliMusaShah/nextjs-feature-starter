import { Card } from "@/components/ui/card"

import type { GameShare } from "../types/analytics-types"
import { GameLegendItem } from "./game-legend-item"
import { GamesDonutChart } from "./games-donut-chart"

type GamesPercentageCardProps = {
  shares: GameShare[]
}

/** The design fills the left legend column first, then the right one. */
function toLegendRows(shares: GameShare[]) {
  const half = Math.ceil(shares.length / 2)
  const rows: GameShare[] = []

  for (let index = 0; index < half; index += 1) {
    const left = shares[half + index]
    const right = shares[index]
    if (left) rows.push(left)
    rows.push(right)
  }

  return rows
}

function GamesPercentageCard({ shares }: GamesPercentageCardProps) {
  return (
    <Card variant="chart" className="xl:w-82.5 xl:shrink-0">
      <h2 className="text-lg font-semibold text-grey-1">Games Percentage</h2>
      <GamesDonutChart shares={shares} />
      <ul className="grid w-full grid-cols-2 gap-2.5">
        {toLegendRows(shares).map((share) => (
          <GameLegendItem key={share.id} share={share} />
        ))}
      </ul>
    </Card>
  )
}

export { GamesPercentageCard }
