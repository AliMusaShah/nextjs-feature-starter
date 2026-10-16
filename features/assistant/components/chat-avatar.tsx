import { cva } from "class-variance-authority"

import type { ChatRole } from "../types/assistant-types"

const chatAvatarVariants = cva(
  "flex size-9.5 shrink-0 items-center justify-center rounded-full text-sm leading-none text-brand-foreground shadow-ds-200",
  {
    variants: {
      role: {
        assistant: "bg-assistant-avatar",
        user: "bg-brand-tertiary",
      },
    },
  }
)

type ChatAvatarProps = {
  role: ChatRole
  initials: string
}

function ChatAvatar({ role, initials }: ChatAvatarProps) {
  return (
    <span aria-hidden="true" className={chatAvatarVariants({ role })}>
      {role === "assistant" ? "AI" : initials}
    </span>
  )
}

export { ChatAvatar }
