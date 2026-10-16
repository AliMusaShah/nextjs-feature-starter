"use client"

import { useState } from "react"

import { PageHeader } from "@/components/layout/page-header"

import type { McqSet } from "../types/mcqs-types"
import { GenerateMcqModal } from "./generate-mcq-modal"
import { LeaderboardModal } from "./leaderboard-modal"
import { McqSetCard } from "./mcq-set-card"

type McqsViewProps = {
  mcqSets: McqSet[]
}

function McqsView({ mcqSets }: McqsViewProps) {
  const [generateOpen, setGenerateOpen] = useState(false)
  const [leaderboardSet, setLeaderboardSet] = useState<McqSet | null>(null)

  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="MCQ’s"
        description="AI-generated quizzes from your notes."
        action={{
          label: "Generate MCQ’s",
          onClick: () => setGenerateOpen(true),
        }}
      />
      <ul className="flex flex-col gap-3">
        {mcqSets.map((mcqSet) => (
          <li key={mcqSet.id}>
            <McqSetCard mcqSet={mcqSet} onViewLeaderboard={setLeaderboardSet} />
          </li>
        ))}
      </ul>
      <GenerateMcqModal open={generateOpen} onOpenChange={setGenerateOpen} />
      <LeaderboardModal
        open={leaderboardSet !== null}
        onOpenChange={(open) => {
          if (!open) setLeaderboardSet(null)
        }}
        quizTitle={leaderboardSet?.title}
      />
    </div>
  )
}

export { McqsView }
