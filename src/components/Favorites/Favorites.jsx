import Card from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch()

const handleralgo = (event) => {
dispatch(orderCards(event.target.value))
}


const handlerotro = (event) => {
dispatch(filterCards(event.target.value))
}


  return (
    <div>
      {myFavorites.map(({ id, name, gender, species, image, onClose }) => {
        return (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
      <div>
        <select onChange={handleralgo} name="">
      <options value="Ascendente">Ascendente</options>
      <options value="Descendente">Ascendente</options>
        </select>
        <select onChange={handlerotro}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
