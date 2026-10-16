import { cva } from "class-variance-authority"

import type { ChatMessage } from "../types/assistant-types"

import { ChatAvatar } from "./chat-avatar"

const rowVariants = cva("flex items-start gap-2.5", {
  variants: {
    role: {
      assistant: "",
      user: "flex-row-reverse",
    },
  },
})

const columnVariants = cva("flex min-w-0 flex-col gap-2", {
  variants: {
    role: {
      assistant: "items-end",
      user: "items-start",
    },
  },
})

const bubbleVariants = cva(
  "max-w-144.5 rounded-b-[22px] border border-primary-fixed-dim/37 bg-chat-bubble py-5 text-sm leading-[1.16] break-words text-outline/68 shadow-card",
  {
    variants: {
      role: {
        assistant: "rounded-tr-[22px] pr-4 pl-7.5",
        user: "rounded-tl-[22px] pr-7.5 pl-4",
      },
    },
  }
)

const timeVariants = cva(
  "text-xs leading-none font-medium text-primary-fixed-dim capitalize",
  {
    variants: {
      role: {
        assistant: "pr-5",
        user: "pl-5",
      },
    },
  }
)

type ChatMessageItemProps = {
  message: ChatMessage
  userInitials: string
}

function ChatMessageItem({ message, userInitials }: ChatMessageItemProps) {
  const { role, text, time } = message

  return (
    <li className={rowVariants({ role })}>
      <ChatAvatar role={role} initials={userInitials} />
      <div className={columnVariants({ role })}>
        <p className={bubbleVariants({ role })}>{text}</p>
        <span className={timeVariants({ role })}>{time}</span>
      </div>
    </li>
  )
}

export { ChatMessageItem }
