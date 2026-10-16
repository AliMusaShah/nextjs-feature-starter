export type SidebarSubEntry = {
  label: string
  href: string
  icon: string
  activeIcon?: string
}

export type SidebarNavEntry = {
  label: string
  href: string
  icon: string
  activeIcon?: string
  iconClassName?: string
  expandable?: boolean
  children?: SidebarSubEntry[]
}

export const sidebarNavEntries: SidebarNavEntry[] = [
  {
    label: "Home",
    href: "/dashboard",
    icon: "/icons/nav-home-dark.svg",
    activeIcon: "/icons/nav-home.svg",
    iconClassName: "size-5.5",
  },
  {
    label: "Library",
    href: "/library",
    icon: "/icons/nav-library.svg",
    expandable: true,
    children: [
      {
        label: "Notes",
        href: "/library/notes",
        icon: "/icons/note-file.svg",
        activeIcon: "/icons/note-stack.svg",
      },
      {
        label: "Assignments",
        href: "/library/assignments",
        icon: "/icons/nav-assignments.svg",
      },
    ],
  },
  { label: "MCQ’s", href: "/mcqs", icon: "/icons/nav-mcqs.svg" },
  { label: "Analytics", href: "/analytics", icon: "/icons/nav-analytics.svg" },
  { label: "Games Hub", href: "/games", icon: "/icons/nav-games.svg", expandable: true },
  { label: "Groups", href: "/groups", icon: "/icons/nav-groups.svg" },
  { label: "Settings", href: "/settings", icon: "/icons/nav-settings.svg" },
]
