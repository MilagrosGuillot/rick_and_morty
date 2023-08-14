import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { register } from "../redux/actions";
import { useDispatch } from 'react-redux';
import styles from "./FormRegister.module.css"; 

const FormRegister = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(register(email, password))
      .then(response => {
        console.log('Registro exitoso', response);
        navigate("/");
      })
      .catch(error => {
        console.error('Error en el registro:', error);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Sing In</button>
      </form>
    </div>
  );
};

export default FormRegister;
