import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"; 

import { useEffect } from "react";
import { getFavorites } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Cards({ characters, onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites()); 
  }, []);

  return (
    <div className={styles.divCards}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
