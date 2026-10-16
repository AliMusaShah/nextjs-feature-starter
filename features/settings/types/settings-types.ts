export type SettingsField = {
  name: string
  label: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute
  autoComplete?: string
  /** Fixed value, only used when the section is read-only. */
  value?: string
}

export type SettingsSectionConfig = {
  id: string
  title: string
  fields: SettingsField[]
  submitLabel?: string
  readOnly?: boolean
}

export type ProfileSummary = {
  initials: string
  username: string
  email: string
}

export type ProfileDetail = {
  id: string
  label: string
  value: string
}
