import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/ui/stat-card";
import {
  AnalyticsLeaderboardCard,
  GamesPercentageCard,
  mockAnalyticsLeaderboard,
  mockAnalyticsStats,
  mockGameOptions,
  mockGameShares,
  mockMcqOptions,
} from "@/features/analytics";

export const metadata: Metadata = {
  title: "Analytics | Parhai.pk",
};

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Analytics"
        description="Insights from your MCQs and games."
      />
      <div className="flex flex-col gap-3">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {mockAnalyticsStats.map((stat) => (
            <li key={stat.id}>
              <StatCard label={stat.label} value={stat.value} tone={stat.tone} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 xl:flex-row xl:items-stretch">
          <GamesPercentageCard shares={mockGameShares} />
          <AnalyticsLeaderboardCard
            entries={mockAnalyticsLeaderboard}
            games={mockGameOptions}
            mcqs={mockMcqOptions}
          />
        </div>
      </div>
    </div>
  );
}
