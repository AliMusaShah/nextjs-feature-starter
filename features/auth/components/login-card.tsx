import Image from "next/image"

import { Button } from "@/components/ui/button"

import { defaultLoginRole, loginRoles } from "../data/login-roles"

import { RoleToggle } from "./role-toggle"

function LoginCard() {
  return (
    <section
      aria-labelledby="login-card-title"
      className="flex w-full max-w-144.5 flex-col rounded-[22px] border border-primary-fixed-dim/37 bg-board px-5 pt-10 pb-7 shadow-card sm:px-7.5 sm:pt-12"
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2.5 text-center">
            <h2
              id="login-card-title"
              className="text-2xl leading-[1.1] font-medium text-heading sm:text-[32px]"
            >
              Welcome Back
            </h2>
            <p className="text-base leading-[1.16] text-brand-secondary">
              Choose your role and continue with your account.
            </p>
          </div>
          <RoleToggle roles={loginRoles} defaultValue={defaultLoginRole} />
        </div>
        <Button
          type="button"
          variant="outline"
          className="h-14 w-full gap-2 rounded-[22px] border-outline/16 bg-white px-4 py-4 text-base font-medium text-text-black shadow-[0_1px_2.4px_rgb(12_12_13/6%)] hover:bg-white hover:brightness-95"
        >
          <span className="relative size-6.5 shrink-0">
            <span className="absolute inset-[6.25%_7.74%_6.29%_7.81%]">
              <Image
                src="/icons/google.svg"
                alt=""
                fill
                sizes="26px"
              />
            </span>
          </span>
          Continue with Google
        </Button>
      </div>
    </section>
  )
}

export { LoginCard }
