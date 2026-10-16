import Image from "next/image"
import { cn } from "cn"

type SelectFieldProps = Omit<React.ComponentProps<"select">, "children"> & {
  label: string
  placeholder: string
  options: { value: string; label: string }[]
}

function SelectField({
  label,
  placeholder,
  options,
  id,
  className,
  ...props
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={id}
        className="text-base leading-none font-medium text-label"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          defaultValue=""
          className={cn(
            "w-full appearance-none rounded-xl border border-primary-fixed-dim/37 bg-tab-track/65 px-3 py-4 pr-12 font-secondary text-sm leading-none text-heading outline-none focus-visible:ring-3 focus-visible:ring-brand/40 invalid:text-heading/60",
            className
          )}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Image
          src="/icons/select-chevron.svg"
          alt=""
          width={24}
          height={24}
          className="pointer-events-none absolute top-1/2 right-3 size-6 -translate-y-1/2"
        />
      </div>
    </div>
  )
}

export { SelectField }
