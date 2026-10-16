import type {
  ProfileDetail,
  ProfileSummary,
  SettingsSectionConfig,
} from "../types/settings-types"

export const settingsSections: SettingsSectionConfig[] = [
  {
    id: "educational",
    title: "Educational Details",
    readOnly: true,
    fields: [
      {
        name: "organization",
        label: "Organization Name",
        placeholder: "Name",
        value: "Punjab Group of Colleges",
      },
      {
        name: "level",
        label: "Class/Level",
        placeholder: "Name",
        value: "Intermediate - Part II",
      },
      {
        name: "studentId",
        label: "ID",
        placeholder: "Student ID",
        value: "PGC-2024-0142",
      },
    ],
  },
  {
    id: "personal",
    title: "Personal Details",
    submitLabel: "Save",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "Name",
        autoComplete: "given-name",
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Name",
        autoComplete: "family-name",
      },
      {
        name: "phone",
        label: "Phone Number",
        placeholder: "Phone Number",
        type: "tel",
        autoComplete: "tel",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Email",
        type: "email",
        autoComplete: "email",
      },
      { name: "age", label: "Age", placeholder: "Age", type: "number" },
    ],
  },
  {
    id: "password",
    title: "Password",
    submitLabel: "Save",
    fields: [
      {
        name: "oldPassword",
        label: "Old Password",
        placeholder: "Old Password",
        type: "password",
        autoComplete: "current-password",
      },
      {
        name: "newPassword",
        label: "New Password",
        placeholder: "New Password",
        type: "password",
        autoComplete: "new-password",
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Confirm Password",
        type: "password",
        autoComplete: "new-password",
      },
    ],
  },
]

export const mockProfileSummary: ProfileSummary = {
  initials: "AS",
  username: "@username",
  email: "abc@org.edu.pk",
}

export const mockProfileDetails: ProfileDetail[] = [
  { id: "name", label: "Name:", value: "Full Name" },
  { id: "email", label: "Email:", value: "abc@abc.com" },
  { id: "phone", label: "Phone:", value: "+92 000 00000000" },
]
