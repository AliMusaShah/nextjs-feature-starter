"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { cn } from "cn"

import { BubbleIcon } from "@/components/ui/bubble-icon"
import { Button } from "@/components/ui/button"

const ACCEPTED_FILE_TYPES = ".pdf,.doc,.docx,.ppt,.pptx,image/*"

type UploadDropzoneProps = {
  onFilesSelected?: (files: File[]) => void
}

function UploadDropzone({ onFilesSelected }: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  function handleDrop(event: React.DragEvent<HTMLElement>) {
    event.preventDefault()
    setIsDragging(false)
    const files = Array.from(event.dataTransfer.files)
    if (files.length > 0) onFilesSelected?.(files)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? [])
    if (files.length > 0) onFilesSelected?.(files)
    event.target.value = ""
  }

  return (
    <section
      aria-label="Upload notes"
      onDragOver={(event) => {
        event.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "flex flex-col gap-6.5 overflow-clip rounded-card border-2 border-dashed border-primary-fixed-dim bg-primary-container/28 px-4 py-10 transition-colors sm:flex-row sm:items-center",
        isDragging && "border-brand bg-primary-container/60"
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2.5">
        <span className="flex shrink-0 items-center justify-center rounded-2xl bg-upload-tile p-3.5 shadow-ds-300">
          <Image
            src="/icons/upload.svg"
            alt=""
            width={35}
            height={35}
            className="h-auto w-8.75"
          />
        </span>
        <div className="flex min-w-0 flex-col gap-2.5">
          <p className="text-xl leading-[1.1] text-black">
            Drop New Materials Here
          </p>
          <p className="text-sm leading-[1.1] text-outline">
            Drop or browse — PDF, DOCX, PPT, images (up to 50 MB)
          </p>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={ACCEPTED_FILE_TYPES}
        onChange={handleInputChange}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
      <Button
        type="button"
        variant="tertiary"
        size="action"
        className="px-5 sm:shrink-0"
        onClick={() => inputRef.current?.click()}
      >
        <BubbleIcon src="/icons/browse-bubble.svg" />
        Browse Files
      </Button>
    </section>
  )
}

export { UploadDropzone }
