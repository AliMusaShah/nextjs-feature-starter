"use client"

import { useState } from "react"

import { Modal } from "@/components/ui/modal"

import {
  mockLeaderboard,
  mockLeaderboardGames,
} from "../data/mcqs-mock"
import { LeaderboardGameFilter } from "./leaderboard-game-filter"
import { LeaderboardRow } from "./leaderboard-row"

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
        <LeaderboardGameFilter
          games={mockLeaderboardGames}
          value={game}
          onChange={setGame}
        />
      }
    >
      <div className="overflow-hidden rounded-xl border-[0.6px] border-outline/22 shadow-card">
        <div
          aria-hidden="true"
          className="flex h-12.75 items-center justify-between gap-2 bg-brand-tertiary px-3 text-sm leading-none font-medium text-brand-foreground sm:text-base"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2 sm:w-65 sm:flex-none sm:gap-11.5">
            <span className="w-13 shrink-0 text-center sm:w-14">Position</span>
            <span>Name</span>
          </div>
          <span className="w-14 shrink-0 text-center sm:w-24">Points</span>
          <span className="w-14 shrink-0 pr-1.5 text-right sm:w-24">Streak</span>
        </div>
        {entries.length > 0 ? (
          <ol>
            {entries.map((entry, index) => (
              <LeaderboardRow
                key={entry.id}
                entry={entry}
                position={index + 1}
              />
            ))}
          </ol>
        ) : (
          <p className="px-3 py-6 text-center text-sm text-outline">
            No scores for this game yet.
          </p>
        )}
      </div>
    </Modal>
  )
}

export { LeaderboardModal }
