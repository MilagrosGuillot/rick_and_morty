import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail, cleanDetail } from "../redux/actions";

const Detail = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));

    return () => {
      dispatch(cleanDetail());
    }
  }, [detailId, dispatch])



  return (
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
      )}
    </div>
  );
};

export default Detail;
