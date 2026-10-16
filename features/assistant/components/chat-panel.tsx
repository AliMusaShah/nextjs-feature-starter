"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

import type { ChatMessage } from "../types/assistant-types"

import { ChatComposer } from "./chat-composer"
import { ChatMessageItem } from "./chat-message-item"

type ChatPanelProps = {
  messages: ChatMessage[]
  userInitials: string
  draft: string
  onDraftChange: (value: string) => void
  onSend: () => void
  onNewChat: () => void
  inputRef?: React.Ref<HTMLInputElement>
}

function ChatPanel({
  messages,
  userInitials,
  draft,
  onDraftChange,
  onSend,
  onNewChat,
  inputRef,
}: ChatPanelProps) {
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (list) list.scrollTo({ top: list.scrollHeight })
  }, [messages])

  return (
    <section
      aria-label="AI Assistant chat"
      className="flex h-144 min-w-0 flex-1 flex-col overflow-clip rounded-[18px] border border-outline/18 bg-card shadow-card xl:h-192.5"
    >
      <div className="flex h-14.625 shrink-0 items-center rounded-t-md border-b border-outline/20 bg-white px-3.5 py-3">
        <button
          type="button"
          onClick={onNewChat}
          className="flex items-center gap-2.5 rounded-md text-xl leading-none font-medium text-brand outline-none transition-opacity hover:opacity-80 focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          <Image
            src="/icons/chat-new.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
          New Chat
        </button>
      </div>
      <div
        ref={listRef}
        role="log"
        aria-live="polite"
        className="min-h-0 flex-1 overflow-y-auto rounded-tl-md border border-tertiary-fixed/42 bg-chat-area px-5 py-10"
      >
        <ol className="flex flex-col gap-7">
          {messages.map((message) => (
            <ChatMessageItem
              key={message.id}
              message={message}
              userInitials={userInitials}
            />
          ))}
        </ol>
      </div>
      <ChatComposer
        value={draft}
        onChange={onDraftChange}
        onSubmit={onSend}
        inputRef={inputRef}
      />
    </section>
  )
}

export { ChatPanel }
