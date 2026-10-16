import type { QuickPrompt } from "../types/assistant-types"

import { AssistantSideCard } from "./assistant-side-card"

type QuickPromptsCardProps = {
  prompts: QuickPrompt[]
  onSelect: (prompt: QuickPrompt) => void
}

function QuickPromptsCard({ prompts, onSelect }: QuickPromptsCardProps) {
  return (
    <AssistantSideCard title="Quick Prompts">
      <ul className="flex flex-col gap-2">
        {prompts.map((prompt) => (
          <li key={prompt.id}>
            <button
              type="button"
              onClick={() => onSelect(prompt)}
              className="flex w-full items-stretch overflow-clip rounded-xl border-[0.5px] border-secondary-fixed-dim/44 text-left outline-none transition-colors focus-visible:ring-3 focus-visible:ring-brand/40"
            >
              <span aria-hidden="true" className="w-1 shrink-0 bg-brand-tertiary" />
              <span className="flex min-h-14.25 min-w-0 flex-1 items-center bg-primary-fixed-dim/14 px-5 py-2.5 text-sm leading-none text-brand-tertiary transition-colors hover:bg-primary-fixed-dim/25">
                {prompt.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </AssistantSideCard>
  )
}

export { QuickPromptsCard }
