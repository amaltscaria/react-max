import { useState, useRef } from "react";

export default function Player() {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);
  // const handleChange = (e) => {
  //   setSubmitted(false);
  //   setPlayerName(e.target.value);
  // };
  // const handleClick = () => {
  //   if (playerName.trim() === "") return;
  //   setSubmitted(true);
  // };
  // using ref
  const handleClick = () => {
    setPlayerName(inputRef.current.value);
  };
  return (
    <section id="player">
      {/* <h2>Welcome {!submitted ? "Unknown Entity!" : playerName}</h2> */}
      <h2>Welcome {playerName ?? "Unknown Entity"}</h2>
      <p>
        <input
          ref={inputRef}
          type="text"
          // onChange={handleChange}
          // value={playerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
