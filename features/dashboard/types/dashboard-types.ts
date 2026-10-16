import type { StatTone } from "@/components/ui/stat-icon-badge"

export type DashboardStat = {
  id: string
  label: string
  value: number
  tone: StatTone
}

export type GameTileData = {
  id: string
  label: string
  href: string
  image: string
  imageSize: "sm" | "lg"
  framed?: boolean
}

export type StreakData = {
  currentStreak: number
  days: boolean[]
}
