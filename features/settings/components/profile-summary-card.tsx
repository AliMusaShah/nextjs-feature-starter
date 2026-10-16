import { UserAvatar } from "@/components/ui/user-avatar"

import type { ProfileSummary } from "../types/settings-types"

type ProfileSummaryCardProps = {
  profile: ProfileSummary
}

function ProfileSummaryCard({ profile }: ProfileSummaryCardProps) {
  const { initials, username, email } = profile

  return (
    <section
      aria-label="Profile summary"
      className="flex min-h-91 flex-col items-center justify-center gap-5.25 rounded-[18px] bg-profile-card px-3.5 py-4 shadow-ds-300"
    >
      <UserAvatar initials={initials} />
      <div className="flex w-full flex-col gap-2 text-center">
        <p className="font-secondary text-lg leading-none font-medium text-white capitalize">
          {username}
        </p>
        <p className="font-secondary text-xs leading-none text-secondary-container lowercase">
          {email}
        </p>
      </div>
    </section>
  )
}

export { ProfileSummaryCard }
