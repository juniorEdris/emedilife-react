import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { AddBasketReducer } from '../Reducer/BasketReducer';
import { CartItemsReducer } from '../Reducer/CartProductsReducerReducer';
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
  //   Basket state
  basket: [],
  basketmsg: '',
  basketstatus: '',
  tabStatus: false,
  //   CartItems state
  cartItems: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    ProductDetails: ProductDetailsReducer,
    Search: SearchReducer,
    Basket: AddBasketReducer,
    CartItems: CartItemsReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
