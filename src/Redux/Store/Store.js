import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { AddBasketReducer } from '../Reducer/BasketReducer';
import { CartItemsReducer } from '../Reducer/CartProductsReducerReducer';
import { HomeContentReducer } from '../Reducer/HomeProductReducer';
import { ProductDetailsReducer } from '../Reducer/ProductDetailsReducer';
import { SearchReducer } from '../Reducer/SearchReducer';
import { CartUpdateIDReducer } from '../Reducer/CartUpdateIDReducer';
import { setUserReducer } from '../Reducer/UserReducer';
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
  localBasket: localStorage.getItem('Cart List')
    ? JSON.parse(localStorage.getItem('Cart List'))
    : [],
  basketmsg: '',
  basketstatus: '',
  tabStatus: false,
  //   CartItems state
  cartItems: [],
  cart_update_id: '',
  user: localStorage.getItem('user_id')
    ? localStorage.getItem('user_id')
    : null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    ProductDetails: ProductDetailsReducer,
    Search: SearchReducer,
    Basket: AddBasketReducer,
    CartItems: CartItemsReducer,
    CartID: CartUpdateIDReducer,
    User: setUserReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
