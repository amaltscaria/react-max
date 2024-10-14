import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer;
const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime* 1000);
    dialog.current.open();
  }

  const hanldeReset = ()=> {
    setTimeRemaining(targetTime*1000);
  }

  const handleStart = () => {
    //using setTimeout we won't be able to find the remainig time if the user manages to stop the timer on time.=>So setInterval.
    // timer.current = setTimeout(() => {
    timer.current = setInterval(() => {
      // setTimerExpired(true);
      // dialog.current.open();
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      // }, targetTime * 1000);
    }, 10); // if we make it 1, it will be a lot of executions so , lets go with 10;
    // setTimerStarted(true);
  };
  const handleStop = () => {
    dialog.current.open();
    // clearTimeout(timer.current);
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime = {timeRemaining}
        onReset = {hanldeReset}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerActive ? handleStop : handleStart}>
          {!timerActive ? "Start" : "Stop"} Challenge
        </button>
        <p className={timerActive ? "active" : ""}>
          Timer {timerActive ? "is running..." : "inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
