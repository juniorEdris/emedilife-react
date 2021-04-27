import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { AddBasketReducer } from '../Reducer/BasketReducer';
import { CartItemsReducer } from '../Reducer/CartProductsReducerReducer';
import { HomeContentReducer } from '../Reducer/HomeProductReducer';
import { ProductDetailsReducer } from '../Reducer/ProductDetailsReducer';
import { SearchReducer } from '../Reducer/SearchReducer';
import { CartUpdateIDReducer } from '../Reducer/CartUpdateIDReducer';
import { setUserReducer } from '../Reducer/UserReducer';
import { WishlistReducer } from '../Reducer/WishlistReducer';
import { UserInfoReducer } from '../Reducer/GetUserInfoReducer';
import { ContactPageMsg } from '../Reducer/ContactMessageReducer';
import { PrescriptionUploadReducer } from '../Reducer/PrescriptionUploadReducer';
import { PlaceOrderReducer } from '../Reducer/PlaceOrderReducer';
export const initialState = {
  loading: true,
  pages: [],
  //HomeContents
  homeSlider: [],
  homeBrands: [],
  neccessaryProducts: [],
  popularProducts: [],
  commonProducts: [],
  homeBlogs: [],
  homeVideo: {},
  healthCareBanner: [],
  hometoplargeBannner: {},
  homebtmLargeBanner: {},
  homeappBanner: {},
  homebrandBtmBanner: {},
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
  // cartItems: [],
  cart_update_id: '',
  user: localStorage.getItem('user_token')
    ? localStorage.getItem('user_token')
    : null,
  //   Wishlist state
  wishlist: [],
  localWishlist: localStorage.getItem('Wish List')
    ? JSON.parse(localStorage.getItem('Wish List'))
    : [],
  wishlistMsg: '',
  wishlistStatus: '',
  //   UserInfo state
  deliveryTypes: [],
  info: {},
  status: '',
  // Contact Page states
  error: { name: '', email: '', subject: '', message: '', prescription: '' },
  contactConfirm: '',
  // Contact Page states
  prescriptionSuccess: '',
  // Place Orders states
  place_order_msg: '',
  order_error: '',
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
    Wishlist: WishlistReducer,
    UserInfo: UserInfoReducer,
    Contact: ContactPageMsg,
    Prescription: PrescriptionUploadReducer,
    PlaceOrder: PlaceOrderReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
