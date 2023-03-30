import React from "react";

interface LeaderBoardEntryProps {
  name: string;
  score: number;
}

export default function LeaderBoardEntry({
  name,
  score,
}: LeaderBoardEntryProps) {
  return (
    <div className="leaderboard-entry">
      <div className="player-name">Player: {name}</div>
      <div className="player-score">Score: {score}</div>
    </div>
  );
}
