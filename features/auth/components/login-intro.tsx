import Image from "next/image"
import Link from "next/link"

import { BrandMark } from "@/components/ui/brand-mark"

function LoginIntro() {
  return (
    <div className="flex w-full max-w-144.5 flex-col gap-7 lg:flex-1 lg:self-stretch">
      <div className="flex pt-3">
        <Link
          href="/"
          aria-label="Back to home"
          className="rounded-md outline-none focus-visible:ring-3 focus-visible:ring-brand/40"
        >
          <Image
            src="/icons/arrow-back.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-6 lg:flex-1 lg:py-5 lg:pr-4">
        <div className="flex flex-col gap-9">
          <div className="flex items-center gap-2.5">
            <BrandMark size="lg" />
            <div className="flex min-w-0 flex-col gap-0.5">
              <p className="text-xl leading-[1.1] font-bold text-on-primary-fixed">
                Parhai.pk
              </p>
              <p className="text-base leading-[1.16] text-brand">
                Personal Learning
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl leading-[1.1] font-semibold text-heading sm:text-4xl xl:text-[42px]">
              Sign in to continue learning
            </h1>
            <p className="text-base leading-[1.16] text-brand-secondary">
              Students can return to their learning dashboard, while teachers
              can access their workspace.
            </p>
          </div>
        </div>
        <div className="relative hidden h-68.5 w-full max-w-102.5 overflow-hidden lg:block">
          <span className="absolute -inset-[32%]">
            <Image
              src="/images/login-illustration.png"
              alt=""
              fill
              sizes="672px"
              className="object-fill"
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export { LoginIntro }
