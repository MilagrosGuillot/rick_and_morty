import styles from "./Card.module.css"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorites, deleteCharacter } from "../redux/actions";

function Card({id,name,genre,species,image,onClose, myFavorites, addFavorites, deleteCharacter}) {
   const [isFav, setIsFav] = useState(false)
   //le tengo que pasar id al onclose asi se que pj eliminar
   const handleFavorite = () => {
   if(isFav) {
      setIsFav(false)
      deleteCharacter(id)
   }else{
      setIsFav(true)
      addFavorites({id,name,genre,species,image,onClose, myFavorites, addFavorites, deleteCharacter})
   }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
     
      <div className={styles.divCard}>
          {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={() => onClose(id)}>X</button>
         <Link to= {`/detail/${id}`}> 
         <h2 className={styles.name}>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{genre}</h2>
         <img className={styles.img} src={image} alt={name} /> 
   
      </div>
   );
}
const mapStateToProps =(state) =>{
   return{
      myFavorites: state.myFavorites
   }

}
const mapDispatchToProps = (dispatch) => {
   return{
      addFavorites: (character) => {
         dispatch(addFavorites(character))
      },
      deleteCharacter: (id) => {
         dispatch(deleteCharacter(id))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps )(Card)