import type {
  AssistantThread,
  ChatMessage,
  QuickPrompt,
} from "../types/assistant-types"

export const mockAssistantUserInitials = "AS"

export const mockAssistantGreeting: ChatMessage = {
  id: "greeting",
  role: "assistant",
  text: `Hi ${mockAssistantUserInitials}. I am your AI Assistant. Ask me to explain a concept, summarize notes, or generate practice questions.`,
  time: "Just Now",
}

export const mockInitialMessages: ChatMessage[] = [
  mockAssistantGreeting,
  { id: "question", role: "user", text: "Question?", time: "Just Now" },
]

export const mockQuickPrompts: QuickPrompt[] = [
  { id: "explain", text: "Explain a concept" },
  { id: "summarize", text: "Summarize my notes" },
  { id: "practice", text: "Generate a quiz" },
]

export const mockRecentThreads: AssistantThread[] = [
  { id: "thread-1", title: "Photosynthesis basics" },
  { id: "thread-2", title: "Quadratic equations" },
  { id: "thread-3", title: "Chapter 4 summary" },
]
