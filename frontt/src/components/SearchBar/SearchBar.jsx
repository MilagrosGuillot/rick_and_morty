import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <>
      <input type="search" onChange={handleChange} />       
      <button onClick={() => onSearch(id)}>Buscar</button>
    </>
    //cada vez que escriba en el input se va a disparar el evento
    //cuando le haga click se va a ejecutar la fn onsearch
  );
};

export default SearchBar;