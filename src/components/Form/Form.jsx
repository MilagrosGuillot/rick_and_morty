import { useState } from "react";
import validate from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validate({ ...userData, [property]: value } , errors, setErrors);
  };
  
const handleSubmit = (event) => {
    event.preventDefault()
login(userData) //le paso el userdata verdadero
}


  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        ></input>
        <span>{errors.username}</span>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        ></input>
        <span>{errors.password}</span>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
