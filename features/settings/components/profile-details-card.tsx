import { Card } from "@/components/ui/card"

import type { ProfileDetail } from "../types/settings-types"

type ProfileDetailsCardProps = {
  details: ProfileDetail[]
}

function ProfileDetailsCard({ details }: ProfileDetailsCardProps) {
  return (
    <Card variant="section" className="items-stretch gap-4">
      <dl className="flex flex-col gap-4">
        {details.map((detail) => (
          <div
            key={detail.id}
            className="flex gap-4.5 rounded-lg border-[0.4px] border-outline/18 bg-tab-track/20 py-4.5"
          >
            <span
              aria-hidden="true"
              className="w-1 shrink-0 self-stretch rounded-full bg-brand"
            />
            <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
              <dt className="min-w-14 text-lg leading-none font-medium text-brand capitalize">
                {detail.label}
              </dt>
              <dd className="min-w-0 text-base leading-none break-words text-outline">
                {detail.value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </Card>
  )
}

export { ProfileDetailsCard }
