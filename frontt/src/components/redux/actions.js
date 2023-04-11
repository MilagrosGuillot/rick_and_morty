import {  ORDER,FILTER, GET_FAVORITES, REMOVE_FAVORITE, GET_CHARACTER_DETAIL, CLEAN_DETAIL} from "./types";
import axios from "axios"


//export const deleteCharacter = (id) => {
  //  return {type: DELETE_CHARACTER, payload: id}
    //}

    export const getFavorites = () => {
        return async function (dispatch) {
          const URL_BASE = "http://localhost:3001";
          const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
          dispatch({ type: GET_FAVORITES, payload: response.data });
        };
      };

      export const getCharacterDetail = (id) => {
        return async function (dispatch) {
          const URL_BASE = "http://localhost:3001";
          const response = await axios.get(`${URL_BASE}/detail/${id}`);
          dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
        };
      };
      export const cleanDetail = () => {
        return { type: CLEAN_DETAIL };
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