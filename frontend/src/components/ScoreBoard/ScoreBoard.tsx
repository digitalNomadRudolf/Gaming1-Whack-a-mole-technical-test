import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";
import { setScore } from "../../reducers/gameState";
import LeaderBoardModal from "../LeaderBoard/LeaderBoardModal";
import Timer from "./Timer/Timer";

function Name() {
  // Get name from store
  const name = store.getState().game.name;

  return (
    <div className="username">
      <h1>Username: {name || "Player 1"}</h1>
    </div>
  );
}

export default function ScoreBoard() {
  // Get score from store
  const [gameScore, setGameScore] = useState(store.getState().game.score);
  // Show LeaderBoard modal on timeup
  const [showLBModal, setShowLBModal] = useState(false);
  const dispatch = useDispatch();

  // Prevent unnecessary rerenders with useCallback
  const handleTimeUp = useCallback(() => {
    setShowLBModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowLBModal(false);
  }, [showLBModal]);

  useEffect(() => {
    store.subscribe(() => {
      setGameScore(store.getState().game.score);
    });
  }, [gameScore]);

  return (
    <div className="scoreboard">
      <Name />
      <h1>Score: {gameScore}</h1>
      <Timer handleTimeUp={handleTimeUp} />
      {showLBModal && (
        <LeaderBoardModal
          closeModal={closeModal}
          resetScore={() => dispatch(setScore(0))}
        />
      )}
    </div>
  );
}
