import { FileCard } from "@/components/ui/file-card"

import type { Note } from "../types/notes-types"

type NoteCardProps = {
  note: Note
}

function NoteCard({ note }: NoteCardProps) {
  return (
    <FileCard title={note.title} href={`/library/notes/${note.id}`}>
      <span>Uploaded: {note.uploadedAt}</span>
      <span>{note.pages} Pages</span>
    </FileCard>
  )
}

export { NoteCard }
