export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_USERNAME = 'SET_USERNAME'

export const addToFavouritesAction = (data) => ({
    type: ADD_TO_FAVOURITES,
    payload: data,
})

export const removeFromFavouritesAction = (index) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: index,
})

export const setUsernameAction = (name) => ({
    type: SET_USERNAME,
    payload: name,
})