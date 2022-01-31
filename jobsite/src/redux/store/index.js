import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import favouritesReducer from '../reducers/index.js'
import jobsReducer from "../reducers/jobs.js"
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'

// this is the compose function the devTools team came up with
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// if you use the above one, you can mantain the devTools enabled and you can apply the redux-thunk middleware
const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    favourites: {
        elements: [],
    },
    jobs: {
        elements: '',
    },
}

const mainReducer = combineReducers({
    favourites: favouritesReducer,
    jobs: jobsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log('encryption error', Error)
            }
        })
    ]
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export let configureStore = createStore(
    persistedReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
)

export const persistor = persistStore(configureStore)

