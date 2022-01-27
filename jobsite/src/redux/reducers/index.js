import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_USERNAME } from '../actions'
import { initialState } from '../store'

export default function favouriteReducer( state = initialState.favourites, action ) {
    console.log(action, state)

    const { type, payload } = action

    switch (type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                elements: [...state.elements, payload],
                }
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                elements: state.elements.filter((company) => company !== payload),
            };
            default: 
                return state;
            }
    }


