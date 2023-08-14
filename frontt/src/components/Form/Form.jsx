import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.box}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Sign in</h1>
          <div className={styles.inputContainer}>
          <span className={styles.span}>Email</span>
            <input
              type="email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
              className={styles.input}
            />
            
            <i className={styles.i}></i>
          </div>
          
          {errors.email && <p className={styles.danger}>{errors.email}</p>}

          <div className={styles.inputContainer}>

          <span className={styles.span}>Password</span>
            <input
              type="password"
              name="password"
              required
              value={userData.password}
              onChange={handleChange}
              className={styles.input}
            />
            <i className={styles.i}></i>
          </div>
          
          {errors.password && <p className={styles.danger}>{errors.password}</p>}

          <div className={styles.links}>
            <Link className={styles.link} to="/register">Sign up</Link>
          </div>

          <input type="submit" value="Login" className={styles.button} />
        </form>
      </div>
    </div>
  );
};

export default Form;
