import type { LeaderboardEntry } from "@/components/ui/leaderboard-row"
import type { StatTone } from "@/components/ui/stat-icon-badge"

export type AnalyticsStat = {
  id: string
  label: string
  value: number
  tone: StatTone
}

export type ChartColor = "green" | "mint" | "sky" | "orange" | "red" | "lime"

export type GameShare = {
  id: string
  label: string
  /** Share of all games played, from 0 to 100. */
  percentage: number
  color: ChartColor
}

export type FilterOption = {
  value: string
  label: string
}

export type AnalyticsLeaderboardEntry = LeaderboardEntry & {
  game: string
  mcq: string
}
