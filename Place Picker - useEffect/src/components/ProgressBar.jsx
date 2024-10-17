import { useState, useEffect } from "react";
const ProgressBar = ({ TIMER }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const [remainingTime, setRemainingTime] = useState(TIMER);
  return <progress value={remainingTime} max={TIMER}></progress>;
};

export default ProgressBar;
