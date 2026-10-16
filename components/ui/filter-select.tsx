import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const filterSelectVariants = cva(
  "h-9.5 appearance-none rounded-[18px] border border-secondary-fixed-dim bg-primary-fixed-dim/14 py-0 pr-8 shadow-ds-100 outline-none focus-visible:ring-3 focus-visible:ring-brand/40",
  {
    variants: {
      size: {
        md: "pl-3.5 text-sm text-outline",
        sm: "pl-3 text-xs text-filter-text/62",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type FilterSelectProps = Omit<
  React.ComponentProps<"select">,
  "size" | "children" | "onChange" | "value"
> &
  VariantProps<typeof filterSelectVariants> & {
    /** Accessible name; also the text of the "no filter" option. */
    label: string
    options: { value: string; label: string }[]
    value: string
    onChange: (value: string) => void
  }

function FilterSelect({
  label,
  options,
  value,
  onChange,
  size,
  className,
  ...props
}: FilterSelectProps) {
  return (
    <div className="relative shrink-0">
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(filterSelectVariants({ size }), className)}
        {...props}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src="/icons/select-chevron-sm.svg"
        alt=""
        width={16}
        height={16}
        className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2"
      />
    </div>
  )
}

export { FilterSelect }
