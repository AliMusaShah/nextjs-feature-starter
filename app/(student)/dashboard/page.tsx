import type { Metadata } from "next";

import {
  mockGames,
  mockStats,
  mockStreak,
  mockStudentFirstName,
  PlayGamesCard,
  StatCard,
  StreakTrackerCard,
  WelcomeBanner,
} from "@/features/dashboard";

export const metadata: Metadata = {
  title: "Dashboard | Parhai.pk",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl leading-[1.1] font-medium text-heading md:text-[42px]">
        Dashboard
      </h1>
      <WelcomeBanner
        firstName={mockStudentFirstName}
        currentStreak={mockStreak.currentStreak}
      />
      <div className="flex flex-col gap-6">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {mockStats.map((stat) => (
            <li key={stat.id}>
              <StatCard stat={stat} />
            </li>
          ))}
        </ul>
        <section aria-labelledby="quick-view-heading" className="flex flex-col gap-5">
          <h2
            id="quick-view-heading"
            className="font-secondary text-xl leading-[1.1] font-medium text-heading"
          >
            Quick View
          </h2>
          <div className="flex flex-col gap-3 xl:flex-row">
            <PlayGamesCard games={mockGames} />
            <StreakTrackerCard streak={mockStreak} />
          </div>
        </section>
      </div>
    </div>
  );
}
