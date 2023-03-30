import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../app/store";
import gameBackground from "../../assets/WAM_bg.jpg";
import MoleHole from "../MoleHole/MoleHole";
import { setScore } from "../../reducers/gameState";
import Mole from "../MoleHole/Mole";
import CustomCursor from "../CustomCursor/CustomCursor";
import hammerImage from "../../assets/WAM_Hammer.png";

export default function MoleGrid() {
  const dispatch = useDispatch();
  // Track mole position
  const [molePos, setMolePos] = useState(0);
  // Track mole visibility
  const [moleVisible, setIsMoleVisible] = useState(false);
  const gameScore = store.getState().game.score;

  const wackMole = (): void => {
    // increment score
    dispatch(setScore(gameScore + 10));
    // hide mole
    setIsMoleVisible(false);
  };

  useEffect(() => {
    const interval = setInterval((): void => {
      // RNG to set mole position
      setMolePos(Math.floor(Math.random() * 12) + 1);
      setIsMoleVisible(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mole-grid"
      style={{
        backgroundImage: `url(${gameBackground})`,
      }}
    >
      <CustomCursor hammerImage={hammerImage} />
      {/* Render 3 rows of 4 mole holes */}
      <div className="mole-grid-container">
        {[...Array(12)].map((_, idx) => {
          const moleLocation = molePos === idx + 1;

          return moleVisible && moleLocation ? (
            <div className="mole-grid__mole" key={idx}>
              <Mole toggle={setIsMoleVisible} handleClick={wackMole} />
            </div>
          ) : (
            <div className="mole-grid__hole" key={idx}>
              <MoleHole toggle={setIsMoleVisible} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
