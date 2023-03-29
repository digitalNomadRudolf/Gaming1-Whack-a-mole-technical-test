import { useState, useEffect, useRef } from "react";

interface TimerProps {
  handleTimeUp: () => void;
}

export default function Timer({ handleTimeUp }: TimerProps) {
  const INITIAL_COUNT = 120;
  const [secondsRemaining, setSecondsRemaining] =
    useState<number>(INITIAL_COUNT);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  useEffect(() => {
    if (secondsRemaining === 0) {
      handleTimeUp();
      return;
    }

    const timerInterval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [secondsRemaining, handleTimeUp]);

  const twoDigits = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="timer">
      {twoDigits(minutesToDisplay)}: {twoDigits(secondsToDisplay)}
    </div>
  );
}
