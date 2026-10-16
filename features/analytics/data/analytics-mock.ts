import type {
  AnalyticsLeaderboardEntry,
  AnalyticsStat,
  FilterOption,
  GameShare,
} from "../types/analytics-types"

export const mockAnalyticsStats: AnalyticsStat[] = [
  { id: "games-played", label: "Games Played", value: 5, tone: "yellow" },
  { id: "mcqs-solved", label: "MCQ’s solved", value: 10, tone: "blue" },
  { id: "total-score", label: "Total Score", value: 90, tone: "red" },
  { id: "avg-accuracy", label: "Avg Accuracy", value: 40, tone: "green" },
]

/** Segments are drawn clockwise from 12 o'clock in this order. */
export const mockGameShares: GameShare[] = [
  { id: "arena", label: "Arena", percentage: 22, color: "green" },
  { id: "brain-builder", label: "Builder", percentage: 7, color: "mint" },
  { id: "quick-quiz", label: "Quiz", percentage: 22, color: "sky" },
  { id: "dartboard", label: "Darts", percentage: 18, color: "orange" },
  { id: "brain-memory", label: "Memory", percentage: 14, color: "red" },
  { id: "word-match", label: "Match", percentage: 17, color: "lime" },
]

export const mockGameOptions: FilterOption[] = [
  { value: "dartboard", label: "Dartboard" },
  { value: "arena", label: "Arena" },
  { value: "brain-memory", label: "Brain Memory" },
  { value: "brain-builder", label: "Brain Builder" },
]

export const mockMcqOptions: FilterOption[] = [
  { value: "hamlet-act-3", label: "Hamlet — Act 3 Analysis" },
  { value: "macbeth-act-1", label: "Macbeth — Act 1 Summary" },
]

export const mockAnalyticsLeaderboard: AnalyticsLeaderboardEntry[] =
  Array.from({ length: 7 }, (_, index) => ({
    id: `player-${index + 1}`,
    initials: "AS",
    name: "Name",
    points: 1500,
    streakDays: 14,
    game: mockGameOptions[index % mockGameOptions.length].value,
    mcq: mockMcqOptions[index % mockMcqOptions.length].value,
    isCurrentUser: index === 3,
  }))
