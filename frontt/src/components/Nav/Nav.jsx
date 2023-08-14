import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"; 

function Nav({ onSearch }) {
  return (
    <div className={styles.navContainer}>
      <Link to="/about" className={styles.navLink}>About</Link>
      <button className={styles.navButton}>
        <Link to="/home" className={styles.navLink}>Home</Link>
      </button>
      <SearchBar onSearch={onSearch} />
      <button className={styles.navButton}>
        <Link to="/favorites" className={styles.navLink}>My Favorites</Link>
      </button>
    </div>
  );
}

export default Nav;
