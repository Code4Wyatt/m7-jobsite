import { createStore } from 'redux'
import mainReducer from '../reducers'

export const initialState = {
    favourites: {
        jobs: [],
    },
    user: {
        username: '',
        isError: false,
    },
}

let configureStore = createStore(
    mainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore