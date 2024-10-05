import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: +value,
      };
    });
  };

  const inputIsValid = input.duration >= 1;

  return (
    <>
      <Header></Header>
      <InputGroup onChange={handleChange} inputValues={input}></InputGroup>
      {inputIsValid && <Result input={input}></Result>}
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
    </>
  );
}

export default App;
