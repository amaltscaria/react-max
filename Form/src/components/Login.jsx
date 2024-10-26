import { useRef } from "react";
import { useState } from "react";

export default function Login() {
  // extracting user input using useState
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: value,
  //     };
  //   });
  // };
  // extracting user input using useRef
  const email = useRef();
  const password = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    formData.email = email.current.value;
    formData.password = password.current.value;
    alert("Login Successfull Welcome " + formData.email);
  };
  const handleReset = () => {
    setFormData({
      email: "",
      password: "",
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            id="email"
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={password}
            id="password"
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
          />
        </div>
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
