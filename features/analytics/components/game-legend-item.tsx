import { cn } from "cn"

import { chartColorClasses } from "../data/chart-colors"
import type { GameShare } from "../types/analytics-types"

type GameLegendItemProps = {
  share: GameShare
}

function GameLegendItem({ share }: GameLegendItemProps) {
  return (
    <li className="flex items-center justify-between gap-2 rounded-[10px] border-[0.4px] border-outline/22 bg-brand-tertiary/1 px-3.5 py-4 text-xs text-outline shadow-ds-100">
      <span className="flex min-w-0 items-center gap-2.75">
        <span
          aria-hidden="true"
          className={cn(
            "size-5 shrink-0 rounded-full border border-outline/18",
            chartColorClasses[share.color].background
          )}
        />
        <span className="truncate">{share.label}</span>
      </span>
      <span className="shrink-0">{share.percentage}%</span>
    </li>
  )
}

export { GameLegendItem }
