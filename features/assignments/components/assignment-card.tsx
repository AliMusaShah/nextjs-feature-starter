import Image from "next/image"

import { FileCard } from "@/components/ui/file-card"

import type { Assignment } from "../types/assignments-types"

type AssignmentCardProps = {
  assignment: Assignment
}

function AssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <FileCard
      title={assignment.title}
      href={`/library/assignments/${assignment.id}`}
    >
      <span>
        <span className="font-medium text-error">Due:</span>{" "}
        {assignment.dueDate}
      </span>
      <span aria-hidden="true">|</span>
      <span className="flex items-center gap-1">
        <Image
          src="/icons/status-dot.svg"
          alt=""
          width={6}
          height={6}
          className="size-1.5 shrink-0"
        />
        {assignment.pages} Pages
      </span>
    </FileCard>
  )
}

export { AssignmentCard }
