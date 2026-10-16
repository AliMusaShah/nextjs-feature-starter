import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

const statIconBadgeVariants = cva(
  "flex size-11.5 shrink-0 items-center justify-center rounded-badge p-2.5 shadow-ds-100",
  {
    variants: {
      tone: {
        red: "bg-stat-score",
        yellow: "bg-stat-games",
        green: "bg-stat-mcqs",
        blue: "bg-tertiary-fixed-dim",
      },
    },
    defaultVariants: {
      tone: "red",
    },
  }
)

type StatTone = NonNullable<VariantProps<typeof statIconBadgeVariants>["tone"]>

type StatIconBadgeProps = {
  tone?: StatTone
}

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
export type { StatTone }
