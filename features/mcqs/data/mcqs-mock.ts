import type {
  LeaderboardEntry,
  LeaderboardGame,
  McqSet,
} from "../types/mcqs-types"

export const mockMcqSets: McqSet[] = [
  {
    id: "mcq-1",
    title: "Hamlet — Act 3 Analysis",
    totalQuestions: 10,
    complexity: "Intermediate",
  },
  {
    id: "mcq-2",
    title: "Hamlet — Act 3 Analysis",
    totalQuestions: 10,
    complexity: "Intermediate",
  },
]

export const mockNoteOptions = [
  { value: "hamlet-act-3", label: "Hamlet — Act 3 Analysis" },
  { value: "macbeth-act-1", label: "Macbeth — Act 1 Summary" },
  { value: "othello-themes", label: "Othello — Themes" },
]

export const mockMcqCountOptions = [5, 10, 15, 20].map((count) => ({
  value: String(count),
  label: String(count),
}))

export const mockLeaderboardGames: LeaderboardGame[] = [
  { value: "dartboard", label: "Dartboard" },
  { value: "arena", label: "Arena" },
  { value: "brain-memory", label: "Brain Memory" },
  { value: "brain-builder", label: "Brain Builder" },
]

const leaderboardGameCycle = mockLeaderboardGames.map((game) => game.value)

export const mockLeaderboard: LeaderboardEntry[] = Array.from(
  { length: 7 },
  (_, index) => ({
    id: `player-${index + 1}`,
    initials: "AS",
    name: "Name",
    points: 1500,
    streakDays: 14,
    game: leaderboardGameCycle[index % leaderboardGameCycle.length],
    isCurrentUser: index === 3,
  })
)
