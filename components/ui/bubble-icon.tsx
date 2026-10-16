import Image from "next/image"
import { cn } from "cn"

type BubbleIconProps = {
  src: string
  className?: string
}

function BubbleIcon({ src, className }: BubbleIconProps) {
  return (
    <span aria-hidden="true" className={cn("relative size-5.5 shrink-0", className)}>
      <span className="absolute inset-[12.5%_12.5%_0.78%_12.5%]">
        <Image src={src} alt="" width={20} height={23} className="size-full" />
      </span>
    </span>
  )
}

export { BubbleIcon }
