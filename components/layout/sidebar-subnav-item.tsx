"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cva } from "class-variance-authority"
import { cn } from "cn"

import type { SidebarSubEntry } from "./sidebar-nav-config"

const subNavItemVariants = cva(
  "flex w-full items-center gap-2 rounded-2xl text-base leading-none outline-none transition-colors focus-visible:ring-3 focus-visible:ring-brand/40",
  {
    variants: {
      active: {
        true: "border border-secondary-fixed-dim bg-brand px-3 py-2.5 font-medium text-brand-foreground",
        false:
          "h-11 py-3 pl-2 font-secondary text-heading hover:bg-secondary-container/50",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
)

type SidebarSubnavItemProps = {
  entry: SidebarSubEntry
  onNavigate?: () => void
}

function SidebarSubnavItem({ entry, onNavigate }: SidebarSubnavItemProps) {
  const pathname = usePathname()
  const active = pathname === entry.href || pathname.startsWith(`${entry.href}/`)
  const iconSrc = active && entry.activeIcon ? entry.activeIcon : entry.icon

  return (
    <Link
      href={entry.href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={subNavItemVariants({ active })}
    >
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        className={cn(
          "size-5 shrink-0",
          active && !entry.activeIcon && "brightness-0 invert"
        )}
      />
      <span className="min-w-0 flex-1 truncate">{entry.label}</span>
    </Link>
  )
}

export { SidebarSubnavItem }
