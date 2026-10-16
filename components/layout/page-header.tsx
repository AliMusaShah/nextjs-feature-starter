import Link from "next/link"

import { BubbleIcon } from "@/components/ui/bubble-icon"
import { buttonVariants } from "@/components/ui/button"

type PageHeaderAction = { label: string } & (
  | { href: string; onClick?: never }
  | { onClick: () => void; href?: never }
)

type PageHeaderProps = {
  title: string
  description: string
  action?: PageHeaderAction
}

const actionClassName = buttonVariants({ variant: "gradient", size: "action" })

function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 flex-1 basis-72 flex-col gap-2.5">
        <h1 className="text-[28px] leading-[1.1] font-bold text-heading">
          {title}
        </h1>
        <p className="text-lg leading-[1.1] text-outline sm:text-xl">
          {description}
        </p>
      </div>
      {action?.href !== undefined ? (
        <Link href={action.href} className={actionClassName}>
          <BubbleIcon src="/icons/generate-bubble.svg" />
          {action.label}
        </Link>
      ) : action ? (
        <button type="button" onClick={action.onClick} className={actionClassName}>
          <BubbleIcon src="/icons/generate-bubble.svg" />
          {action.label}
        </button>
      ) : null}
    </header>
  )
}

export { PageHeader }
