"use client"

import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { SelectField } from "@/components/ui/select-field"
import { TextareaField } from "@/components/ui/textarea-field"

import { mockMcqCountOptions, mockNoteOptions } from "../data/mcqs-mock"

type GenerateMcqModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function GenerateMcqModal({ open, onOpenChange }: GenerateMcqModalProps) {
  const formId = useId()

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Generate AI MCQ"
      description="Choose the notes and number of questions to generate a quiz with AI."
      titleClassName="font-secondary"
      headerClassName="px-1.5"
    >
      <form
        className="flex flex-col gap-9"
        onSubmit={(event) => {
          event.preventDefault()
          onOpenChange(false)
        }}
      >
        <div className="flex flex-col gap-5 px-2">
          <SelectField
            id={`${formId}-notes`}
            name="notes"
            label="Select Notes"
            placeholder="Notes"
            options={mockNoteOptions}
            required
          />
          <SelectField
            id={`${formId}-count`}
            name="count"
            label="Select Total MCQ’s"
            placeholder="Count"
            options={mockMcqCountOptions}
            required
          />
          <TextareaField
            id={`${formId}-description`}
            name="description"
            label="Description (If Any)"
            placeholder="Notes"
          />
        </div>
        <div className="px-2">
          <Button type="submit" variant="brand" size="block">
            Generate
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export { GenerateMcqModal }
