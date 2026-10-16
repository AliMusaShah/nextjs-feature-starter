import Image from "next/image"

function AssistantBanner() {
  return (
    <header className="relative flex min-h-33.25 flex-col justify-center gap-1.25 overflow-clip bg-assistant-banner p-5 text-brand-foreground shadow-ds-300">
      <div className="flex flex-col gap-2.5 leading-[1.1]">
        <h1 className="text-[28px] font-bold">AI Assistant</h1>
        <p className="text-lg sm:text-xl">
          Explanations, summaries, and study help — instantly.
        </p>
      </div>
      <Image
        src="/icons/ai-ellipse.svg"
        alt=""
        width={42}
        height={42}
        className="absolute -right-3.25 top-6 size-10.5"
      />
      <Image
        src="/icons/ai-ellipse.svg"
        alt=""
        width={42}
        height={42}
        className="absolute -left-6.25 top-16.5 size-10.5"
      />
    </header>
  )
}

export { AssistantBanner }
