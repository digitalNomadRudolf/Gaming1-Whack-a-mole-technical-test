import { useState, useEffect } from "react";
import { store } from "../../app/store";
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
  const [gameScore, setGameScore] = useState<number>(
    store.getState().game.score
  );
  // Show LeaderBoard modal on timeup
  const [showLBModal, setShowLBModal] = useState(false);

  function handleTimeUp() {
    console.log("Timer ran out!");
    setShowLBModal(true);
  }

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
    </div>
  );
}
