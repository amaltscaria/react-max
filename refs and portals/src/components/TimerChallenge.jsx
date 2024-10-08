import { useState, useRef } from "react";

// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {!timerStarted ? "Start" : "Stop"} Challenge
      </button>
      <p className={timerStarted ? "active" : ""}>
        Timer {timerStarted ? "is running..." : "inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
