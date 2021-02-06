import {createStore,applyMiddleware ,combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({}),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store

