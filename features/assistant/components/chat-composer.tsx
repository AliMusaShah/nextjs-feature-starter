import Image from "next/image"

import { Button } from "@/components/ui/button"

type ChatComposerProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  inputRef?: React.Ref<HTMLInputElement>
}

function ChatComposer({
  value,
  onChange,
  onSubmit,
  inputRef,
}: ChatComposerProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
      className="border-t border-outline/12 bg-white px-3.5 py-3"
    >
      <div className="flex items-center gap-3 rounded-b-lg border border-primary-fixed-dim/37 bg-tab-track p-3 sm:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            type="button"
            aria-label="Attach a link"
            className="relative h-7.75 w-[30.979px] shrink-0 rounded-full outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
          >
            <span className="absolute inset-[-9.68%_-12.91%_-16.13%_-12.91%]">
              <Image
                src="/icons/chat-attach.svg"
                alt=""
                width={39}
                height={39}
                className="size-full max-w-none"
              />
            </span>
          </button>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            aria-label="Ask the AI Assistant"
            placeholder="Ask Anything"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-sm leading-none text-heading outline-none placeholder:text-outline/68"
          />
        </div>
        <Button
          type="submit"
          variant="brand"
          size="send"
          className="shadow-[0_1px_8.45px_rgb(0_0_0/28%)]"
        >
          <span className="pr-1.5 pl-3 leading-none">Send</span>
          <Image
            src="/icons/send-arrow.svg"
            alt=""
            width={18}
            height={18}
            className="size-4.5"
          />
        </Button>
      </div>
    </form>
  )
}

export { ChatComposer }
