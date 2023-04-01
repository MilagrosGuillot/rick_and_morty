import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


function Nav({ onSearch }) {
  return (
    <div>
      <Link to="/about">About</Link>
      <button><Link to="/home">Home</Link></button>
      <SearchBar onSearch={onSearch}></SearchBar>
      <button><><Link to="/favorites">MyFavorites</Link></></button>
     
      </div>
)}
export default Nav

