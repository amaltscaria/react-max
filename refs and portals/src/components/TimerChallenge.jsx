import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={"lost"}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
};

export default TimerChallenge;
