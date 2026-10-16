import type { DashboardStat, GameTileData, StreakData } from "../types/dashboard-types"

export const mockStudentFirstName = "Atia"

export const mockStats: DashboardStat[] = [
  { id: "score", label: "Total Score", value: 90, tone: "red" },
  { id: "games", label: "Games Played", value: 5, tone: "yellow" },
  { id: "mcqs", label: "Total MCQS", value: 40, tone: "green" },
  { id: "notes", label: "Total Notes", value: 10, tone: "blue" },
]

export const mockGames: GameTileData[] = [
  {
    id: "quiz-battle",
    label: "Quiz Battle",
    href: "/games/quiz-battle",
    image: "/images/games/dartboard.png",
    imageSize: "sm",
  },
  {
    id: "game-memory",
    label: "Game Memory",
    href: "/games/game-memory",
    image: "/images/games/brain-memory.svg",
    imageSize: "lg",
  },
  {
    id: "arena-runner",
    label: "Arena Runner",
    href: "/games/arena-runner",
    image: "/images/games/arena.png",
    imageSize: "lg",
    framed: true,
  },
  {
    id: "flip-tower",
    label: "Flip Tower",
    href: "/games/flip-tower",
    image: "/images/games/dartboard.png",
    imageSize: "sm",
  },
  {
    id: "builder-world",
    label: "Builder World",
    href: "/games/builder-world",
    image: "/images/games/brain-builder.svg",
    imageSize: "lg",
  },
  {
    id: "scramble-rapid-fire",
    label: "Scramble Rapid Fire",
    href: "/games/scramble-rapid-fire",
    image: "/images/games/arena.png",
    imageSize: "lg",
    framed: true,
  },
]

const MONTH_DAYS = 31
const FIRST_ACTIVE_DAY_INDEX = 4
const CURRENT_STREAK = 12

export const mockStreak: StreakData = {
  currentStreak: CURRENT_STREAK,
  days: Array.from(
    { length: MONTH_DAYS },
    (_, index) =>
      index >= FIRST_ACTIVE_DAY_INDEX &&
      index < FIRST_ACTIVE_DAY_INDEX + CURRENT_STREAK
  ),
}
