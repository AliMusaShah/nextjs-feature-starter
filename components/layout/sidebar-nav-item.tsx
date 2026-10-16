"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cva } from "class-variance-authority"
import { cn } from "cn"

import type { SidebarNavEntry } from "./sidebar-nav-config"

const navItemVariants = cva(
  "flex w-full items-center gap-2 rounded-2xl p-3 text-base leading-none outline-none transition-colors focus-visible:ring-3 focus-visible:ring-brand/40",
  {
    variants: {
      active: {
        true: "border border-secondary-fixed-dim bg-brand text-brand-foreground",
        false: "text-text-black hover:bg-secondary-container/50",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

type SidebarNavItemProps = {
  entry: SidebarNavEntry
  onNavigate?: () => void
}

function SidebarNavItem({ entry, onNavigate }: SidebarNavItemProps) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  const active = pathname === entry.href || pathname.startsWith(`${entry.href}/`)

  const content = (
    <>
      <Image
        src={entry.icon}
        alt=""
        width={20}
        height={20}
        className={cn("size-5 shrink-0", entry.iconClassName)}
      />
      <span className="min-w-0 flex-1 text-left">{entry.label}</span>
      {entry.expandable ? (
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={20}
          height={20}
          className={cn(
            "size-5 shrink-0 transition-transform",
            expanded && "rotate-180"
          )}
        />
      ) : null}
    </>
  )

  if (entry.expandable) {
    return (
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        className={navItemVariants({ active: false })}
      >
        {content}
      </button>
    )
  }

  return (
    <Link
      href={entry.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={navItemVariants({ active })}
    >
      {content}
    </Link>
  )
}

export { SidebarNavItem }
