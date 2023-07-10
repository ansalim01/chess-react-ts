import React, { useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";
interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

function Timer({ currentPlayer, restart }: TimerProps) {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);
  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }
  function decrementBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTime() {
    setWhiteTime((prev) => prev - 1);
  }
  function handleRestart() {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  }
  return (
    <div>
      <div className="">
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2>Чёрные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
}

export default Timer;
