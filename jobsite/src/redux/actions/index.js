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

export const fetchJobs = (url, query) => {
    return async (dispatch, getState) => {
        try {
            let resp = await fetch(url + query + '$limit=30')
            if (resp.ok) {
                const { datat } = await resp.json()
                dispath({
                    type: "FETCH_JOBS",
                    payload: data,
                });
            } else {
                console.log("error")
            }
        } catch (error) {
            console.log(error)
        }
    }
}