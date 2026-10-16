import { cn } from "cn"

type TextareaFieldProps = React.ComponentProps<"textarea"> & {
  label: string
}

function TextareaField({
  label,
  id,
  className,
  ...props
}: TextareaFieldProps) {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor={id}
        className="text-base leading-none font-medium text-label"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={cn(
          "h-22.5 w-full resize-none rounded-xl border border-primary-fixed-dim/37 bg-tab-track/65 px-3 py-4 font-secondary text-sm leading-none text-heading outline-none placeholder:text-heading/60 focus-visible:ring-3 focus-visible:ring-brand/40",
          className
        )}
        {...props}
      />
    </div>
  )
}

export { TextareaField }
