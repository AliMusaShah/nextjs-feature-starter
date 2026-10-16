import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { OptionsButton } from "@/components/ui/options-button"

import type { McqSet } from "../types/mcqs-types"

type McqSetCardProps = {
  mcqSet: McqSet
  onViewLeaderboard: (mcqSet: McqSet) => void
}

const chipClassName =
  "rounded-full px-[9.36px] py-[4.68px] text-[10.15px] leading-[1.1] whitespace-nowrap text-on-tertiary-container"

function McqSetCard({ mcqSet, onViewLeaderboard }: McqSetCardProps) {
  const { id, title, totalQuestions, complexity } = mcqSet

  return (
    <Card variant="row">
      <div className="flex min-w-0 flex-wrap items-center gap-x-5.5 gap-y-3 px-2 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/note-file.svg"
            alt=""
            width={30}
            height={30}
            className="size-7.5 shrink-0"
          />
          <div className="flex min-w-0 flex-col gap-2 leading-none">
            <h3 className="text-base font-medium text-brand-secondary">
              {title}
            </h3>
            <button
              type="button"
              onClick={() => onViewLeaderboard(mcqSet)}
              className="w-fit rounded-sm text-left text-xs tracking-[0.03em] text-brand underline outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
            >
              View Leaderboard
            </button>
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-2">
          <li className={cn(chipClassName, "bg-tertiary-fixed/42")}>
            Total Questions:&nbsp;
            <span className="font-medium">{totalQuestions}</span>
          </li>
          <li className={cn(chipClassName, "bg-error-container/42")}>
            Complexity: {complexity}
          </li>
        </ul>
      </div>
      <div className="flex items-stretch gap-2.5 px-2 pb-3 xl:p-0">
        <Link
          href={`/mcqs/${id}`}
          className={cn(buttonVariants({ variant: "brand", size: "compact" }))}
        >
          <Image
            src="/icons/reminder.svg"
            alt=""
            width={18}
            height={18}
            className="size-4.5"
          />
          Solve
        </Link>
        <Link
          href={`/games/mcq/${id}`}
          className={cn(
            buttonVariants({ variant: "brandOutline", size: "compact" }),
            "px-2"
          )}
        >
          <Image
            src="/icons/motion-play.svg"
            alt=""
            width={18}
            height={18}
            className="size-4.5"
          />
          Play Game
        </Link>
        <OptionsButton label={`Options for ${title}`} className="self-center" />
      </div>
    </Card>
  )
}

export { McqSetCard }
