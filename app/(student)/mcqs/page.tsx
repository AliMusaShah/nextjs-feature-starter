import type { Metadata } from "next";

import { McqsView, mockMcqSets } from "@/features/mcqs";

export const metadata: Metadata = {
  title: "MCQ’s | Parhai.pk",
};

export default function McqsPage() {
  return <McqsView mcqSets={mockMcqSets} />;
}
