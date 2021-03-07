import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { HomeContentReducer } from '../Reducer/HomeProductReducer';
import { ProductDetailsReducer } from '../Reducer/ProductDetailsReducer';
export const initialState = {
  loading: true,
  //HomeContents
  homeSlider: [],
  neccessaryProducts: [],
  //   Single Product details
  productDetails: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    ProductDetails: ProductDetailsReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
