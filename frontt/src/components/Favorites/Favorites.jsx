import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";

const Favorites = () => {
  const Favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {Favorites.map(({ id, name, gender, species, image, onClose }) => {
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
    </div>
  );
};
export default Favorites
