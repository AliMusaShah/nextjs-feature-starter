import Image from "next/image"
import { MenuIcon } from "lucide-react"

type TopbarProps = {
  userInitials: string
  onMenuClick: () => void
}

function Topbar({ userInitials, onMenuClick }: TopbarProps) {
  return (
    <header className="flex h-18.5 shrink-0 items-center justify-between gap-3 border-b border-surface-variant bg-surface-bright px-4">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-text-black outline-none transition-colors hover:bg-secondary-container/50 focus-visible:ring-3 focus-visible:ring-brand/40 lg:hidden"
        >
          <MenuIcon className="size-6" aria-hidden="true" />
        </button>
        <label className="flex w-full max-w-138.25 items-center gap-2 rounded-card border border-outline/22 bg-white p-3 shadow-ds-100 focus-within:ring-3 focus-within:ring-brand/40">
          <Image
            src="/icons/search.svg"
            alt=""
            width={20}
            height={20}
            className="size-5 shrink-0"
          />
          <input
            type="search"
            aria-label="Search"
            placeholder="Search"
            className="min-w-0 flex-1 bg-transparent font-secondary text-base leading-none font-medium text-text-black outline-none placeholder:text-outline-variant"
          />
        </label>
      </div>
      <div className="flex shrink-0 items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className="flex size-6 items-center justify-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          <Image
            src="/icons/notifications.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </button>
        <button
          type="button"
          aria-label="Account menu"
          className="flex size-11 items-center justify-center rounded-full border border-secondary-container bg-secondary-container/50 text-[14.667px] leading-none font-medium tracking-[0.12em] text-outline shadow-ds-200 outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          {userInitials}
        </button>
      </div>
    </header>
  )
}

export { Topbar }
