"use client"

import { useId } from "react"

import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input-field"

import type { SettingsSectionConfig } from "../types/settings-types"

type SettingsFormSectionProps = {
  section: SettingsSectionConfig
}

function SettingsFormSection({ section }: SettingsFormSectionProps) {
  const formId = useId()
  const { title, fields, submitLabel, readOnly } = section

  return (
    <form
      aria-labelledby={`${formId}-title`}
      onSubmit={(event) => event.preventDefault()}
      className="flex gap-4.5 rounded-tr-[8px] border-[0.4px] border-outline/18 bg-tab-track/14 py-4.5 shadow-ds-200"
    >
      <span
        aria-hidden="true"
        className="w-0.5 shrink-0 self-stretch rounded-full bg-brand"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-8 pr-4.5">
        <h2
          id={`${formId}-title`}
          className="text-xl leading-none font-medium text-scheme-primary uppercase"
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 sm:gap-x-5.5">
          {fields.map((field) => (
            <InputField
              key={field.name}
              id={`${formId}-${field.name}`}
              name={field.name}
              label={field.label}
              labelClassName="text-outline"
              placeholder={field.placeholder}
              type={field.type}
              autoComplete={field.autoComplete}
              readOnly={readOnly}
              defaultValue={readOnly ? field.value : undefined}
              className={readOnly ? "cursor-default" : undefined}
            />
          ))}
        </div>
        {submitLabel && !readOnly ? (
          <Button type="submit" variant="brand" size="pill" className="w-fit">
            {submitLabel}
          </Button>
        ) : null}
      </div>
    </form>
  )
}

export { SettingsFormSection }
