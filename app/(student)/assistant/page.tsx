import type { Metadata } from "next";

import {
  AssistantView,
  mockAssistantGreeting,
  mockAssistantUserInitials,
  mockInitialMessages,
  mockQuickPrompts,
  mockRecentThreads,
} from "@/features/assistant";

export const metadata: Metadata = {
  title: "AI Assistant | Parhai.pk",
};

export default function AssistantPage() {
  return (
    <AssistantView
      userInitials={mockAssistantUserInitials}
      greeting={mockAssistantGreeting}
      initialMessages={mockInitialMessages}
      quickPrompts={mockQuickPrompts}
      threads={mockRecentThreads}
    />
  );
}
