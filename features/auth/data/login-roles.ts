import type { RoleOption } from "../types/auth-types"

export const loginRoles: RoleOption[] = [
  {
    value: "student",
    label: "Student",
    iconSrc: "/icons/role-student.svg",
    iconClassName: "size-[16.182px]",
  },
  {
    value: "teacher",
    label: "Teacher",
    iconSrc: "/icons/role-teacher.svg",
    iconClassName: "h-[11.274px] w-[10.175px]",
  },
]

export const defaultLoginRole = "student"
