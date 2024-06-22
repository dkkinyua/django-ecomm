import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducers'
import productReducer from '../reducers/productReducers'


const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store