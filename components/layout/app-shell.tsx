"use client"

import { useState } from "react"
import { Dialog } from "@base-ui/react/dialog"

import { Sidebar } from "./sidebar"
import { Topbar } from "./topbar"

type AppShellProps = {
  userInitials: string
  children: React.ReactNode
}

function AppShell({ userInitials, children }: AppShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-svh bg-background">
      <aside className="sticky top-0 hidden h-svh w-64 shrink-0 lg:block">
        <Sidebar />
      </aside>

      <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/40 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0 lg:hidden" />
          <Dialog.Popup className="fixed inset-y-0 left-0 z-50 w-64 max-w-[85vw] outline-none transition-transform data-ending-style:-translate-x-full data-starting-style:-translate-x-full lg:hidden">
            <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          userInitials={userInitials}
          onMenuClick={() => setMenuOpen(true)}
        />
        <main className="flex-1 overflow-clip bg-board p-5">{children}</main>
      </div>
    </div>
  )
}

export { AppShell }
