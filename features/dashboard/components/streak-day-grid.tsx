import { cva } from "class-variance-authority"

const streakDayVariants = cva(
  "aspect-square rounded-cell border border-outline/14",
  {
    variants: {
      active: {
        true: "bg-linear-to-t from-streak-from to-streak-to shadow-ds-300",
        false: "bg-streak-cell",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

type StreakDayGridProps = {
  days: boolean[]
}

function StreakDayGrid({ days }: StreakDayGridProps) {
  const activeCount = days.filter(Boolean).length

  return (
    <div
      role="img"
      aria-label={`${activeCount} of ${days.length} days completed this month`}
      className="mx-auto grid w-full max-w-99 grid-cols-8 gap-2 sm:gap-3"
    >
      {days.map((active, index) => (
        <span key={index} className={streakDayVariants({ active })} />
      ))}
    </div>
  )
}

export { StreakDayGrid }
