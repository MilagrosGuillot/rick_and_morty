import { ADD_FAVORITES, DELETE_CHARACTER } from "./types";

export const addFavorites = (character) => {
return {type: ADD_FAVORITES, payload: character}
}
export const deleteCharacter = (id) => {
    return {type: DELETE_CHARACTER, payload: id}
    }