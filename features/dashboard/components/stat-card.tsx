import { Card } from "@/components/ui/card"

import type { DashboardStat } from "../types/dashboard-types"
import { StatIconBadge } from "./stat-icon-badge"

type StatCardProps = {
  stat: DashboardStat
}

function StatCard({ stat }: StatCardProps) {
  return (
    <Card
      variant="stat"
      className="min-h-30.25 items-center justify-between gap-3"
    >
      <div className="flex flex-col gap-6">
        <p className="text-base leading-none font-medium whitespace-nowrap text-brand-secondary">
          {stat.label}
        </p>
        <p className="font-secondary text-2xl leading-[1.1] font-bold text-heading">
          {stat.value}
        </p>
      </div>
      <StatIconBadge tone={stat.tone} />
    </Card>
  )
}

export { StatCard }
