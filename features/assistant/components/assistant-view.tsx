"use client"

import { useRef, useState } from "react"

import type {
  AssistantThread,
  ChatMessage,
  QuickPrompt,
} from "../types/assistant-types"

import { AssistantBanner } from "./assistant-banner"
import { ChatPanel } from "./chat-panel"
import { QuickPromptsCard } from "./quick-prompts-card"
import { RecentThreadsCard } from "./recent-threads-card"

type AssistantViewProps = {
  userInitials: string
  greeting: ChatMessage
  initialMessages: ChatMessage[]
  quickPrompts: QuickPrompt[]
  threads: AssistantThread[]
}

function AssistantView({
  userInitials,
  greeting,
  initialMessages,
  quickPrompts,
  threads,
}: AssistantViewProps) {
  const [messages, setMessages] = useState(initialMessages)
  const [draft, setDraft] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSend() {
    const text = draft.trim()
    if (!text) return
    setMessages((current) => [
      ...current,
      { id: `user-${current.length}`, role: "user", text, time: "Just Now" },
    ])
    setDraft("")
  }

  function handleNewChat() {
    setMessages([greeting])
    setDraft("")
    inputRef.current?.focus()
  }

  function handleSelectPrompt(prompt: QuickPrompt) {
    setDraft(prompt.text)
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col gap-6.5">
      <AssistantBanner />
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start">
        <div className="flex flex-col gap-3 xl:w-60.5 xl:shrink-0">
          <QuickPromptsCard prompts={quickPrompts} onSelect={handleSelectPrompt} />
          <RecentThreadsCard threads={threads} />
        </div>
        <ChatPanel
          messages={messages}
          userInitials={userInitials}
          draft={draft}
          onDraftChange={setDraft}
          onSend={handleSend}
          onNewChat={handleNewChat}
          inputRef={inputRef}
        />
      </div>
    </div>
  )
}

export { AssistantView }
