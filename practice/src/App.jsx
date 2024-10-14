import { useState } from "react";
import Input from "./components/Input.jsx";
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log(name, email);

  const handleChange = (e) => {
    console.log('hey')
    const {name, value} = e.target;
    if(name === 'name'){
      setName(value);
    }else {
      setEmail(value);
    }
  }
  return (
    <>
      <Input value = {name} type="text" label={"name"} name = "name" onChange = {handleChange}></Input>
      <Input value = {email} type="text" label="mail" name = "email" onChange= {handleChange}></Input>
    </>
  );
};
export default App;
