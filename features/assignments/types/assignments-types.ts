import type { StatTone } from "@/components/ui/stat-icon-badge"

export type AssignmentStatus = "pending" | "completed"

export type AssignmentFilter = "all" | AssignmentStatus

export type Assignment = {
  id: string
  title: string
  dueDate: string
  pages: number
  status: AssignmentStatus
}

export type AssignmentStat = {
  id: string
  label: string
  value: number
  tone: StatTone
}
