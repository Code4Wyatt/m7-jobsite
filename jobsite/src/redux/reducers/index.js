import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_USERNAME } from '../actions'
import { initialState } from '../store'

const favouriteReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    companies: [...state.favourites.companies, action.payload],
                },
            }

        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    favourites: state.favourites.companies.filter((book, i) => i !== action.payload)
                },
            }

        case SET_USERNAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload,
                },
            }

        default: return state
    }
}

export default favouriteReducer