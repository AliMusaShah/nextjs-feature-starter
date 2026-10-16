import Image from "next/image"

type WelcomeBannerProps = {
  firstName: string
  currentStreak: number
}

function WelcomeBanner({ firstName, currentStreak }: WelcomeBannerProps) {
  return (
    <section
      aria-label="Welcome"
      className="flex flex-col justify-center gap-7.5 rounded-xl bg-welcome-banner px-4.5 pt-8.5 pb-10 shadow-ds-300"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3.5">
          <h2 className="text-2xl leading-none font-normal text-brand-foreground sm:text-[28px]">
            Welcome Back, {firstName}
          </h2>
          <span className="flex size-13.5 shrink-0 items-center justify-center">
            <Image
              src="/icons/waving-hand.svg"
              alt=""
              width={42}
              height={42}
              className="size-10.5 -rotate-19"
            />
          </span>
        </div>
        <p className="text-base leading-snug text-secondary-container sm:leading-none">
          Beat one MCQ and play one match to keep your {currentStreak}-day
          streak alive.
        </p>
      </div>
    </section>
  )
}

export { WelcomeBanner }
