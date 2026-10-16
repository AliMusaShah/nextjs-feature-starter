import Image from "next/image"
import Link from "next/link"

type AiAssistantCardProps = {
  onNavigate?: () => void
}

function AiAssistantCard({ onNavigate }: AiAssistantCardProps) {
  return (
    <Link
      href="/assistant"
      onClick={onNavigate}
      className="relative flex w-full flex-col justify-center gap-1.25 overflow-clip rounded-2xl bg-assistant-card px-3.5 py-4 shadow-ds-300 outline-none transition-[filter] hover:brightness-110 focus-visible:ring-3 focus-visible:ring-brand/40"
    >
      <span className="text-base leading-[1.04] text-secondary-container">
        Stuck on any topic?
      </span>
      <span className="flex items-center gap-2">
        <span className="relative size-6.5 shrink-0">
          <span className="absolute inset-[12.5%_12.5%_0.78%_12.5%]">
            <Image
              src="/icons/ai-bubble.svg"
              alt=""
              width={20}
              height={23}
              className="size-full"
            />
          </span>
        </span>
        <span className="text-lg leading-none font-medium tracking-[0.04em] text-brand-foreground uppercase">
          AI Assistant
        </span>
      </span>
      <Image
        src="/icons/ai-ellipse.svg"
        alt=""
        width={42}
        height={42}
        className="absolute -right-3.75 top-6 size-10.5"
      />
      <Image
        src="/icons/ai-ellipse.svg"
        alt=""
        width={42}
        height={42}
        className="absolute -left-6.25 top-16.5 size-10.5"
      />
    </Link>
  )
}

export { AiAssistantCard }
