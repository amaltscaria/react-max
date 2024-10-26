import { useState } from "react";

const useInput = (defaultValue) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const handleChange = (event) => {
    

   setEnteredValue(event.target.value);
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      if (!value.includes("@")) {
        setInputValidity((prevInputValidity) => {
          return {
            ...prevInputValidity,
            [name]: false,
          };
        });
      } else {
        setInputValidity((prevInputValidity) => {
          return { ...prevInputValidity, [name]: true };
        });
      }
    } else if (name === "password") {
      if (value.length <= 8 || value.trim() === "") {
        setInputValidity((prevInputValidity) => {
          return {
            ...prevInputValidity,
            [name]: false,
          };
        });
      } else {
        setInputValidity((prevInputValidity) => {
          return {
            ...prevInputValidity,
            [name]: true,
          };
        });
      }
    }
    console.log(inputValidity);
  };
};
