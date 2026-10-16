import Image from "next/image"

import type { RoleOption, UserRole } from "../types/auth-types"

type RoleToggleProps = {
  roles: RoleOption[]
  defaultValue: UserRole
}

function RoleToggle({ roles, defaultValue }: RoleToggleProps) {
  return (
    <fieldset className="flex items-center justify-center gap-2 px-2 py-1.5">
      <legend className="sr-only">Sign in as</legend>
      {roles.map((role) => (
        <label
          key={role.value}
          className="group/role flex cursor-pointer items-center gap-2 rounded-2xl border-[0.818px] border-outline/16 bg-white px-3 py-1 shadow-[0_0_0.75px_rgb(0_0_0/10%)] transition-colors has-checked:border-brand/56 has-checked:bg-transparent has-checked:bg-role-chip-active has-checked:shadow-[0_0_10.6px_rgb(190_234_247/25%)] has-focus-visible:ring-3 has-focus-visible:ring-brand/40"
        >
          <input
            type="radio"
            name="role"
            value={role.value}
            defaultChecked={role.value === defaultValue}
            className="sr-only"
          />
          <span
            aria-hidden="true"
            className="flex size-[27.818px] shrink-0 items-center justify-center rounded-full border-[0.732px] border-outline/7 bg-tertiary-fixed-dim/7 group-has-checked/role:bg-secondary-container/76"
          >
            <Image
              src={role.iconSrc}
              alt=""
              width={16}
              height={16}
              className={role.iconClassName}
            />
          </span>
          <span className="text-[11.455px] leading-[1.1] font-medium text-outline group-has-checked/role:text-brand-tertiary">
            {role.label}
          </span>
        </label>
      ))}
    </fieldset>
  )
}

export { RoleToggle }
