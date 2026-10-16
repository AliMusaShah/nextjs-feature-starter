import type { Assignment, AssignmentStat } from "../types/assignments-types"

export const mockAssignmentStats: AssignmentStat[] = [
  { id: "total", label: "Total", value: 5, tone: "yellow" },
  { id: "pending", label: "Pending", value: 2, tone: "blue" },
  { id: "completed", label: "Completed", value: 3, tone: "red" },
]

export const mockAssignments: Assignment[] = [
  {
    id: "hamlet-act-3-a",
    title: "Hamlet — Act 3 Analysis.pdf",
    dueDate: "20-03-2025",
    pages: 24,
    status: "pending",
  },
  {
    id: "hamlet-act-3-b",
    title: "Hamlet — Act 3 Analysis.pdf",
    dueDate: "20-03-2025",
    pages: 24,
    status: "completed",
  },
  {
    id: "hamlet-act-3-c",
    title: "Hamlet — Act 3 Analysis.pdf",
    dueDate: "20-03-2025",
    pages: 24,
    status: "pending",
  },
]
