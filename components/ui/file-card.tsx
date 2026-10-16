import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type FileCardProps = {
  title: string
  href: string
  children: React.ReactNode
}

function FileCard({ title, href, children }: FileCardProps) {
  return (
    <Card variant="note" className="h-70">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col px-2 pb-3">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/note-file.svg"
              alt=""
              width={30}
              height={30}
              className="size-7.5 shrink-0"
            />
            <h3 className="min-w-0 truncate text-base leading-none font-medium text-brand-secondary">
              {title}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-x-2.5 pl-10 text-[11.733px] leading-[1.1] text-outline">
            {children}
          </div>
        </div>
        <button
          type="button"
          aria-label={`Options for ${title}`}
          className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          <Image
            src="/icons/more-vert.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </button>
      </div>
      <div className="flex flex-col gap-2.25">
        <div className="flex h-34.5 items-center justify-center overflow-clip rounded-[7px] bg-brand-tertiary/10 p-2.5">
          <Image
            src="/icons/note-file.svg"
            alt=""
            width={30}
            height={30}
            className="size-7.5 shrink-0"
          />
        </div>
        <Link
          href={href}
          aria-label={`View ${title}`}
          className={cn(
            buttonVariants({ variant: "brand" }),
            "w-full rounded-xl text-xs tracking-[0.03em]"
          )}
        >
          View
        </Link>
      </div>
    </Card>
  )
}

export { FileCard }
