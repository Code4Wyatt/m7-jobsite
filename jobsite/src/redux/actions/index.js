export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_USERNAME = 'SET_USERNAME'

export const addToFavouritesAction = (company) => ({
    type: ADD_TO_FAVOURITES,
    payload: company,
})

export const removeFromCartAction = (index) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: index,
})

export const setUsernameAction = (name) => ({
    type: SET_USERNAME,
    payload: name,
})