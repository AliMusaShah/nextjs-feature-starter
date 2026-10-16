import { Card } from "@/components/ui/card"

import { StatIconBadge, type StatTone } from "./stat-icon-badge"

type StatCardProps = {
  label: string
  value: number
  tone: StatTone
}

function StatCard({ label, value, tone }: StatCardProps) {
  return (
    <Card
      variant="stat"
      className="min-h-30.25 items-center justify-between gap-3"
    >
      <div className="flex flex-col gap-6">
        <p className="text-base leading-none font-medium whitespace-nowrap text-brand-secondary">
          {label}
        </p>
        <p className="font-secondary text-2xl leading-[1.1] font-bold text-heading">
          {value}
        </p>
      </div>
      <StatIconBadge tone={tone} />
    </Card>
  )
}

export { StatCard }
