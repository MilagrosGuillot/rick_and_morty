import { ADD_FAVORITES, DELETE_CHARACTER, FILTER, ORDER } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: []
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
            return {
                ...state,
                allCharacters: state.allCharacters.filter(
                    (gender) => gender === action.payload
                )
            }
        case ORDER:
            return {
                ...state,
                allCharacters: state.allCharacters.sort((a, b) => {
                    if (action.payload === "Ascendente") {
                        return a.id - b.id;
                    } else if (action.payload === "Descendente") {
                        return b.id - a.id;
                    } else {
                        return 0;
                    }
                })
            }


        default:
            return { ...state }
    }
}
export default rootReducer;