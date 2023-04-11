import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect, } from "react";
import { useDispatch } from "react-redux";
import { getFavorites, removeFavorite} from "../redux/actions";
import axios from "axios"

function Card({
  id,
  name,
  genre,
  species,
  image,
  onClose,
  myFavorites,
})

{
  const addFavorite = (character) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character) //hago una req post al server mandando a guardar el obj character que le puse el corazon
      .then((res) => console.log("ok"));
  }
  const dispatch = useDispatch()

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Eliminado con éxito");
  };

  const [isFav, setIsFav] = useState(false);
  //le tengo que pasar id al onclose asi se que pj eliminar

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        genre,
        species,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{genre}</h2>
      <img className={styles.img} src={image} alt={name} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
