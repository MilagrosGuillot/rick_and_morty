import { useState } from "react";
import validate from "./validation";
import styles from "./Form.module.css"

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
        <label className={styles.label1} htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        ></input>
        <span className={styles.errorUser}>{errors.username}</span>
      </div>

      <div>
        <label className={styles.label2} htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        ></input>
        <span className={styles.errorPass}>{errors.password}</span>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
