import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import {
  ProfileDetailsCard,
  ProfileSummaryCard,
  SettingsFormSection,
  mockProfileDetails,
  mockProfileSummary,
  settingsSections,
} from "@/features/settings";

export const metadata: Metadata = {
  title: "Settings | Parhai.pk",
};

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Settings"
        description="Customize your learning experience."
      />
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start">
        <Card variant="section" className="min-w-0 flex-1 gap-5 p-5">
          {settingsSections.map((section) => (
            <SettingsFormSection key={section.id} section={section} />
          ))}
        </Card>
        <div className="flex flex-col gap-3 xl:w-96.75 xl:shrink-0">
          <ProfileSummaryCard profile={mockProfileSummary} />
          <ProfileDetailsCard details={mockProfileDetails} />
        </div>
      </div>
    </div>
  );
}
