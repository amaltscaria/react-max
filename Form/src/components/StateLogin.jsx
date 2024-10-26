import { useRef } from "react";
import { useState } from "react";
import Input from "./Input.jsx";

export default function StateLogin() {
  // extracting user input using useState
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [inputValidity, setInputValidity] = useState({
    email: true,
    password: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  // extracting user input using useRef
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successfull Welcome " + formData.email);
  };
  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
    });
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
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          onBlur={handleInputBlur}
          error={!inputValidity.email && "Please Enter a Valid Email"}
        ></Input>

        <Input
          id="password"
          type="password"
          name="password"
          label="password"
          value={formData.password}
          onBlur={handleInputBlur}
          onChange={handleChange}
          error={!inputValidity.password && "Please Enter a Valid Password"}
        />
      </div>

      <p className="form-actions">
        <button
          className="button button-flat"
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
