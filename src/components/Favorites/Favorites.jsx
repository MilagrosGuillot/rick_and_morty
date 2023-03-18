import Card from "../Card/Card";
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
