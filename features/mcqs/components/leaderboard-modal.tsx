"use client"

import { useState } from "react"

import { FilterSelect } from "@/components/ui/filter-select"
import { LeaderboardTable } from "@/components/ui/leaderboard-table"
import { Modal } from "@/components/ui/modal"

import {
  mockLeaderboard,
  mockLeaderboardGames,
} from "../data/mcqs-mock"

type LeaderboardModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  quizTitle?: string
}

function LeaderboardModal({
  open,
  onOpenChange,
  quizTitle,
}: LeaderboardModalProps) {
  const [game, setGame] = useState("")

  const entries = game
    ? mockLeaderboard.filter((entry) => entry.game === game)
    : mockLeaderboard

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Leaderboard"
      description={
        quizTitle ? `Leaderboard for ${quizTitle}` : "Quiz leaderboard"
      }
      headerAction={
        <FilterSelect
          label="Filter by game"
          options={mockLeaderboardGames}
          value={game}
          onChange={setGame}
        />
      }
    >
      <LeaderboardTable
        entries={entries}
        emptyMessage="No scores for this game yet."
        className="shadow-card"
      />
    </Modal>
  )
}

export { LeaderboardModal }
