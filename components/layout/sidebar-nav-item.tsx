"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cva } from "class-variance-authority"
import { cn } from "cn"

import type { SidebarNavEntry } from "./sidebar-nav-config"
import { SidebarSubnavItem } from "./sidebar-subnav-item"

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
  const submenuId = useId()
  const [manualExpanded, setManualExpanded] = useState<boolean | null>(null)

  const active = pathname === entry.href || pathname.startsWith(`${entry.href}/`)
  const inSection = entry.children?.some((child) =>
    pathname.startsWith(child.href)
  )
  const expanded = manualExpanded ?? Boolean(inSection)
  const iconSrc = active && entry.activeIcon ? entry.activeIcon : entry.icon

  const content = (
    <>
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        className={cn("size-5 shrink-0", entry.iconClassName)}
      />
      <span
        className={cn(
          "min-w-0 flex-1 text-left",
          entry.children && "font-medium"
        )}
      >
        {entry.label}
      </span>
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
      <>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={entry.children ? submenuId : undefined}
          onClick={() => setManualExpanded(!expanded)}
          className={cn(
            navItemVariants({ active: false }),
            expanded && entry.children && "bg-primary-fixed-dim/14 py-2.5"
          )}
        >
          {content}
        </button>
        {entry.children && expanded ? (
          <div id={submenuId} className="flex items-start py-1.5 pl-5">
            <span aria-hidden="true" className="w-px self-stretch bg-brand" />
            <ul className="flex min-w-0 flex-1 flex-col">
              {entry.children.map((child) => (
                <li key={child.href} className="pl-4">
                  <SidebarSubnavItem entry={child} onNavigate={onNavigate} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </>
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
