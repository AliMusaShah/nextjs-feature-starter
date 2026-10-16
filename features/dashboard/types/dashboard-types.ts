export type StatTone = "score" | "games" | "mcqs" | "notes"

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
