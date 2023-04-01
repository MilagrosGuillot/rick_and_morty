import { ADD_FAVORITES, DELETE_CHARACTER, ORDER,FILTER, GET_FAVORITES, REMOVE_FAVORITE} from "./types";
import axios from "axios"


export const deleteCharacter = (id) => {
    return {type: DELETE_CHARACTER, payload: id}
    }

    export const getFavorites = () => {
        return async function (dispatch) {
          const URL_BASE = "http://localhost:3001";
          const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
          dispatch({ type: GET_FAVORITES, payload: response.data });
        };
      };
      export const removeFavorite = (id) => {
        return { type: REMOVE_FAVORITE, payload: id };
      };

    export const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
    }

    export const orderCards = (id) =>{
    return {type: ORDER, payload: id}
    }