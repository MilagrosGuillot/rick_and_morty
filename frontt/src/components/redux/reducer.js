import { GET_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE, FILTER, ORDER, GET_CHARACTER_DETAIL,CLEAN_DETAIL } from "./types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail: {},
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: action.payload,
            };

        case REMOVE_FAVORITE:
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
                        ? state.allCharacters.sort((a, b) => a.id - b.id)
                        : state.allCharacters.sort((a, b) => b.id - a.id)
            }
            case GET_FAVORITES:
                return { ...state, myFavorites: action.payload };

        case CLEAN_DETAIL:
            return {
                ...state,
                characterDetail: {},
            };

        default:
            return { ...state }
    }
}
export default rootReducer;