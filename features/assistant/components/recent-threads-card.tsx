import Image from "next/image"

import type { AssistantThread } from "../types/assistant-types"

import { AssistantSideCard } from "./assistant-side-card"

type RecentThreadsCardProps = {
  threads: AssistantThread[]
}

function RecentThreadsCard({ threads }: RecentThreadsCardProps) {
  return (
    <AssistantSideCard title="Recent Threads">
      <ul className="flex flex-col gap-2">
        {threads.map((thread) => (
          <li key={thread.id}>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-[18px] border border-secondary-fixed-dim/44 bg-primary-fixed-dim/14 px-3 py-2.5 text-left text-sm leading-none text-outline outline-none transition-colors hover:bg-primary-fixed-dim/25 focus-visible:ring-3 focus-visible:ring-brand/40"
            >
              <Image
                src="/icons/thread-dot.svg"
                alt=""
                width={10}
                height={10}
                className="size-2.5 shrink-0"
              />
              <span className="min-w-0 truncate">{thread.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </AssistantSideCard>
  )
}

export { RecentThreadsCard }
