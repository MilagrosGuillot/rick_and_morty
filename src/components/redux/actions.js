import { ADD_FAVORITES, DELETE_CHARACTER, ORDER,FILTER} from "./types";

export const addFavorites = (character) => {
return {type: ADD_FAVORITES, payload: character}
}
export const deleteCharacter = (id) => {
    return {type: DELETE_CHARACTER, payload: id}
    }

    export const filterCards = (gender) =>{
    return {type: FILTER, payload: gender}
    }

    export const orderCards = (id) =>{
    return {type: ORDER, payload: id}
    }