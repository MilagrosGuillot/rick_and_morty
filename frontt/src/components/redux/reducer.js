import { ADD_FAVORITES, DELETE_CHARACTER, FILTER, ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case DELETE_CHARACTER:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                )
            }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharactersFiltered
            }

        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }

        default:
            return { ...state }
            }
    }
    export default rootReducer;