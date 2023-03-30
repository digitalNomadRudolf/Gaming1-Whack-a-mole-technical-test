import { useEffect, useState } from "react";
import { fetchLeaderBoard } from "../../api/routes";
import { store } from "../../app/store";
import { Leaderboard } from "../../api/routes";
import LeaderBoardEntry from "./LeaderBoardEntry";

interface LeaderBoardModalProps {
  closeModal: () => void;
  resetScore: () => void;
}

export default function LeaderBoardModal({
  closeModal,
  resetScore,
}: LeaderBoardModalProps) {
  // leaderboard state that will hold the leaderboard data
  const [leaderBoardData, setLeaderBoardData] = useState<Leaderboard[]>();
  // get leaderboard data in a useEffect
  useEffect(() => {
    fetchLeaderBoard().then((data) => {
      console.log(data);
      setLeaderBoardData(data);
    });
  }, []);

  function handleCloseLeaderBoard() {
    resetScore();
    closeModal();
  }

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-container-title">
        <h1>Whack A Mole LeaderBoard</h1>
      </div>
      <div className="leaderboard-container-players">
        {leaderBoardData?.map((player) => (
          <LeaderBoardEntry name={player.name} score={player.score} />
        ))}
      </div>
      <div
        className="close-leaderboard"
        onClick={() => handleCloseLeaderBoard()}
      >
        Play Again
      </div>
    </div>
  );
}
