import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { HomeContentReducer } from '../Reducer/HomeProductReducer';
import { ProductDetailsReducer } from '../Reducer/ProductDetailsReducer';
import { SearchReducer } from '../Reducer/SearchReducer';
export const initialState = {
  loading: true,
  //HomeContents
  homeSlider: [],
  homeBrands: [],
  neccessaryProducts: [],
  popularProducts: [],
  commonProducts: [],
  homeBlogs: [],
  //   Single Product details
  productDetails: {},
  //   Search Results
  searchResults: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    ProductDetails: ProductDetailsReducer,
    Search: SearchReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
