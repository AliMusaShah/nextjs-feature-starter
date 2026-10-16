import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

const statIconBadgeVariants = cva(
  "flex size-11.5 shrink-0 items-center justify-center rounded-badge p-2.5 shadow-ds-100",
  {
    variants: {
      tone: {
        score: "bg-stat-score",
        games: "bg-stat-games",
        mcqs: "bg-stat-mcqs",
        notes: "bg-tertiary-fixed-dim",
      },
    },
    defaultVariants: {
      tone: "score",
    },
  }
)

type StatIconBadgeProps = VariantProps<typeof statIconBadgeVariants>

function StatIconBadge({ tone }: StatIconBadgeProps) {
  return (
    <span className={statIconBadgeVariants({ tone })}>
      <Image
        src="/icons/note-stack.svg"
        alt=""
        width={20}
        height={20}
        className="size-5"
      />
    </span>
  )
}

export { StatIconBadge }
