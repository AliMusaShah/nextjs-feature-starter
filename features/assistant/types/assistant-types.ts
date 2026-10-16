export type ChatRole = "assistant" | "user"

export type ChatMessage = {
  id: string
  role: ChatRole
  text: string
  time: string
}

export type AssistantThread = {
  id: string
  title: string
}

export type QuickPrompt = {
  id: string
  text: string
}
