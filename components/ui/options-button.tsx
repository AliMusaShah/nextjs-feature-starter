import Image from "next/image"
import { cn } from "cn"

type OptionsButtonProps = {
  label: string
  className?: string
}

function OptionsButton({ label, className }: OptionsButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-brand/40",
        className
      )}
    >
      <Image
        src="/icons/more-vert.svg"
        alt=""
        width={24}
        height={24}
        className="size-6"
      />
    </button>
  )
}

export { OptionsButton }
