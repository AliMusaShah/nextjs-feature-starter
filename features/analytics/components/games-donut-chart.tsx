import { chartColorClasses } from "../data/chart-colors"
import type { GameShare } from "../types/analytics-types"

const RADIUS = 111.32
const STROKE_WIDTH = 20.36
const CENTER = 121.5

type GamesDonutChartProps = {
  shares: GameShare[]
}

function GamesDonutChart({ shares }: GamesDonutChartProps) {
  const total = shares.reduce((sum, share) => sum + share.percentage, 0)
  const summary = shares
    .map((share) => `${share.label} ${share.percentage}%`)
    .join(", ")

  const segments = shares.map((share, index) => ({
    share,
    length: total > 0 ? (share.percentage / total) * 100 : 0,
    offset: shares
      .slice(0, index)
      .reduce(
        (sum, previous) =>
          sum + (total > 0 ? (previous.percentage / total) * 100 : 0),
        0
      ),
  }))

  return (
    <div className="relative aspect-square w-full max-w-60.75 drop-shadow-[0_1px_2px_rgb(12_12_13/0.1)]">
      <svg
        viewBox="0 0 243 243"
        role="img"
        aria-label={`Games percentage: ${summary}`}
        className="size-full -rotate-90"
      >
        {segments.map(({ share, length, offset }) => (
          <circle
            key={share.id}
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            strokeWidth={STROKE_WIDTH}
            pathLength={100}
            strokeDasharray={`${length} ${100 - length}`}
            strokeDashoffset={-offset}
            className={chartColorClasses[share.color].stroke}
          />
        ))}
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center text-5xl leading-none text-brand"
      >
        %
      </span>
    </div>
  )
}

export { GamesDonutChart }
