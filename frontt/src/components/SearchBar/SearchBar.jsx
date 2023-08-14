import React, { useState } from "react";
import styles from "./SearchBar.module.css"; 

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="search"
        onChange={handleChange}
        className={styles.searchInput}
        placeholder="Enter character ID"
      />
      <button onClick={() => onSearch(id)} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
