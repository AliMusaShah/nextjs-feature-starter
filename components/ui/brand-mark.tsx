import Image from "next/image"
import { cva, type VariantProps } from "class-variance-authority"

const brandMarkVariants = cva("flex shrink-0 bg-brand", {
  variants: {
    size: {
      md: "rounded-md p-3",
      lg: "rounded-[8.766px] p-[14.727px]",
    },
  },
  defaultVariants: { size: "md" },
})

const iconVariants = cva("", {
  variants: {
    size: {
      md: "size-5.25",
      lg: "size-[24.545px]",
    },
  },
  defaultVariants: { size: "md" },
})

type BrandMarkProps = VariantProps<typeof brandMarkVariants>

/** Green square with the Parhai.pk teaching mark. */
function BrandMark({ size }: BrandMarkProps) {
  return (
    <span aria-hidden="true" className={brandMarkVariants({ size })}>
      <Image
        src="/icons/logo-mark.svg"
        alt=""
        width={25}
        height={25}
        className={iconVariants({ size })}
      />
    </span>
  )
}

export { BrandMark }
