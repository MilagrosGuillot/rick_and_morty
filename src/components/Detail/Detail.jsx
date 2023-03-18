import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const URL = "https://be-a-rym.up.railway.app/api"
    const KEY = "cf893d2caad2.349d61a2b53d07cb1b33"
    fetch(`${URL}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  
  return(
   <div>
    {character.name ? (
      <>
 <h2>{character?.name}</h2>
 <p>{character?.status}</p>
 <p>{character?.specie}</p>
 <p>{character?.gender}</p>
 <p>{character?.origin.name}</p>
 <img src={character?.image} alt="img" />
 </>
    ) : (
      <h3>Loading...</h3>
    )
    }
  </div>
  )
};

export default Detail;
