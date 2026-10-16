export type SidebarNavEntry = {
  label: string
  href: string
  icon: string
  iconClassName?: string
  expandable?: boolean
}

export const sidebarNavEntries: SidebarNavEntry[] = [
  { label: "Home", href: "/dashboard", icon: "/icons/nav-home.svg", iconClassName: "size-5.5" },
  { label: "Library", href: "/library", icon: "/icons/nav-library.svg", expandable: true },
  { label: "MCQ’s", href: "/mcqs", icon: "/icons/nav-mcqs.svg" },
  { label: "Analytics", href: "/analytics", icon: "/icons/nav-analytics.svg" },
  { label: "Games Hub", href: "/games", icon: "/icons/nav-games.svg", expandable: true },
  { label: "Groups", href: "/groups", icon: "/icons/nav-groups.svg" },
  { label: "Settings", href: "/settings", icon: "/icons/nav-settings.svg" },
]
