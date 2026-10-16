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

export type LeaderboardEntry = {
  id: string
  initials: string
  name: string
  points: number
  streakDays: number
  game: string
  isCurrentUser: boolean
}
