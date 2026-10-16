import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/ui/stat-card";
import {
  AssignmentsBrowser,
  mockAssignments,
  mockAssignmentStats,
} from "@/features/assignments";

export const metadata: Metadata = {
  title: "Assignments | Parhai.pk",
};

export default function AssignmentsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Assignments"
        description="Stay on top of every submission. Track progress, never miss a due date."
        action={{ label: "View Notes", href: "/library/notes" }}
      />
      <div className="flex flex-col gap-6.5">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {mockAssignmentStats.map((stat) => (
            <li key={stat.id}>
              <StatCard label={stat.label} value={stat.value} tone={stat.tone} />
            </li>
          ))}
        </ul>
        <AssignmentsBrowser assignments={mockAssignments} />
      </div>
    </div>
  );
}
