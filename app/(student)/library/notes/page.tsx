import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { mockNotes, NoteCard, UploadDropzone } from "@/features/notes";

export const metadata: Metadata = {
  title: "Notes | Parhai.pk",
};

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Notes"
        description="Upload &amp; Access your study Notes"
        action={{ label: "Generate MCQ’s", href: "/mcqs/generate" }}
      />
      <UploadDropzone />
      <section aria-labelledby="all-notes-heading" className="flex flex-col gap-5">
        <h2
          id="all-notes-heading"
          className="text-[22px] leading-[1.1] font-medium text-heading"
        >
          All Notes
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {mockNotes.map((note) => (
            <li key={note.id} className="flex flex-col">
              <NoteCard note={note} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
