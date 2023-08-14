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

      export const register = (email, password) => {
        return async function (dispatch) {
          try {
            const response = await axios.post("http://localhost:3001/register", {
              email: email,
              password: password
            });
      
            // Aquí puedes manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
            console.log(response.data);
      
            // Dispara una acción en Redux en caso de éxito, si es necesario
            // dispatch(registrationSuccess(response.data));
      
            return response.data; // Esto es opcional, dependiendo de tus necesidades
          } catch (error) {
            console.error('Error en el registro:', error);
            throw error; // Relanza el error para que pueda ser manejado más arriba
          }
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