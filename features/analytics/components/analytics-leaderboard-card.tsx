"use client"

import { useState } from "react"

import { Card } from "@/components/ui/card"
import { FilterSelect } from "@/components/ui/filter-select"
import { LeaderboardTable } from "@/components/ui/leaderboard-table"

import type {
  AnalyticsLeaderboardEntry,
  FilterOption,
} from "../types/analytics-types"

type AnalyticsLeaderboardCardProps = {
  entries: AnalyticsLeaderboardEntry[]
  games: FilterOption[]
  mcqs: FilterOption[]
}

function AnalyticsLeaderboardCard({
  entries,
  games,
  mcqs,
}: AnalyticsLeaderboardCardProps) {
  const [game, setGame] = useState("")
  const [mcq, setMcq] = useState("")

  const visibleEntries = entries.filter(
    (entry) => (!game || entry.game === game) && (!mcq || entry.mcq === mcq)
  )

  return (
    <Card variant="section" className="min-w-0 flex-1">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <h2 className="text-lg font-semibold text-grey-1">Leaderboard</h2>
          <p className="text-sm leading-none text-outline">
            Filter by game and MCQ
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <FilterSelect
            size="sm"
            label="All Games"
            options={games}
            value={game}
            onChange={setGame}
          />
          <FilterSelect
            size="sm"
            label="All MCQ’s"
            options={mcqs}
            value={mcq}
            onChange={setMcq}
            className="border-outline/12"
          />
        </div>
      </div>
      <LeaderboardTable
        entries={visibleEntries}
        showMedals
        emptyMessage="No scores match these filters."
      />
    </Card>
  )
}

export { AnalyticsLeaderboardCard }
