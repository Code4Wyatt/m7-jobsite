import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favouritesReducer from '../reducers/favourites'
import jobsReducer from "../reducers/jobs"
import thunk from 'redux-thunk'


export const initialState = {
    favourites: {
        elements: [],
    },
    jobs: {
        elements: '',
    },
}

const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    jobs: jobsReducer,
})

export default createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

