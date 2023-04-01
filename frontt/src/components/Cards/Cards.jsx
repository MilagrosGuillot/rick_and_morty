import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

class Cards extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <div className={styles.divCards}>
      {this.props.characters.map(({ id, name, species, gender, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={this.props.onClose}
        />
      ))}
    
    
    </div>
  );
      }
}

export default Cards
