"use client"

import { useState } from "react"
import { Tabs } from "@base-ui/react/tabs"

import type { Assignment, AssignmentFilter } from "../types/assignments-types"
import { AssignmentCard } from "./assignment-card"

const FILTERS: { value: AssignmentFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "completed", label: "Completed" },
]

type AssignmentsBrowserProps = {
  assignments: Assignment[]
}

function AssignmentsBrowser({ assignments }: AssignmentsBrowserProps) {
  const [filter, setFilter] = useState<AssignmentFilter>("all")

  return (
    <Tabs.Root
      value={filter}
      onValueChange={(value) => setFilter(value as AssignmentFilter)}
      className="flex flex-col gap-5"
    >
      <Tabs.List
        aria-label="Filter assignments"
        className="flex h-9.75 w-fit items-center rounded-3xl border border-outline/20 bg-tab-track px-2 py-1.5"
      >
        {FILTERS.map((item) => (
          <Tabs.Tab
            key={item.value}
            value={item.value}
            className="cursor-pointer text-sm leading-[1.1] text-heading outline-none focus-visible:ring-3 focus-visible:ring-brand/40 data-active:rounded-xl data-active:border data-active:border-outline/46 data-active:bg-white data-active:px-2 data-active:py-1.25 data-active:font-medium not-data-active:rounded-xl not-data-active:py-2.5 not-data-active:pl-2.5"
          >
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {FILTERS.map((item) => {
        const visible =
          item.value === "all"
            ? assignments
            : assignments.filter(
                (assignment) => assignment.status === item.value
              )

        return (
          <Tabs.Panel key={item.value} value={item.value} className="outline-none">
            {visible.length > 0 ? (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {visible.map((assignment) => (
                  <li key={assignment.id} className="flex flex-col">
                    <AssignmentCard assignment={assignment} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="py-10 text-center text-base text-outline">
                No {item.label.toLowerCase()} assignments.
              </p>
            )}
          </Tabs.Panel>
        )
      })}
    </Tabs.Root>
  )
}

export { AssignmentsBrowser }
