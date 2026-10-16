"use client"

import Link from "next/link"

import { BrandMark } from "@/components/ui/brand-mark"

import { AiAssistantCard } from "./ai-assistant-card"
import { SidebarNavItem } from "./sidebar-nav-item"
import { sidebarNavEntries } from "./sidebar-nav-config"

type SidebarProps = {
  onNavigate?: () => void
}

function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-clip border-r border-secondary-container bg-surface-bright">
      <div className="flex h-18.5 shrink-0 items-center px-4">
        <Link
          href="/dashboard"
          onClick={onNavigate}
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          <BrandMark />
          <span className="flex flex-col items-start justify-center gap-1">
            <span className="text-xl leading-[1.1] font-bold text-on-primary-fixed">
              Parhai.pk
            </span>
            <span className="text-xs leading-none text-text-black">
              STUDENT
            </span>
          </span>
        </Link>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 overflow-y-auto px-4 py-6">
        <nav aria-label="Main" className="pt-3">
          <ul className="flex flex-col">
            {sidebarNavEntries.map((entry) => (
              <li key={entry.label}>
                <SidebarNavItem entry={entry} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </nav>
        <AiAssistantCard onNavigate={onNavigate} />
      </div>
    </div>
  )
}

export { Sidebar }
