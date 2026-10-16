import type { LeaderboardEntry } from "@/components/ui/leaderboard-row"

export type McqSet = {
  id: string
  title: string
  totalQuestions: number
  complexity: string
}

export type LeaderboardGame = {
  value: string
  label: string
}

export type McqLeaderboardEntry = LeaderboardEntry & {
  game: string
}
