import Image from "next/image"

import { Card } from "@/components/ui/card"

import type { StreakData } from "../types/dashboard-types"
import { StreakDayGrid } from "./streak-day-grid"

type StreakTrackerCardProps = {
  streak: StreakData
}

function StreakTrackerCard({ streak }: StreakTrackerCardProps) {
  return (
    <Card variant="panel" className="w-full gap-3 xl:w-107 xl:shrink-0">
      <div className="flex items-center gap-2 px-2">
        <Image
          src="/icons/streak.svg"
          alt=""
          width={38}
          height={38}
          className="size-9.5 shrink-0"
        />
        <h3 className="text-[22px] leading-none font-medium text-heading">
          Streak Tracker
        </h3>
      </div>
      <div className="flex flex-col gap-3 pb-3">
        <div className="flex h-32.5 items-center justify-center gap-2.5 rounded-card bg-streak-hero px-4 py-2.5">
          <Image
            src="/icons/fire.svg"
            alt=""
            width={64}
            height={66}
            className="h-auto w-16 shrink-0"
          />
          <p className="font-secondary text-xl leading-none font-medium text-streak-hero-foreground uppercase">
            {streak.currentStreak} days
          </p>
        </div>
        <StreakDayGrid days={streak.days} />
      </div>
    </Card>
  )
}

export { StreakTrackerCard }
