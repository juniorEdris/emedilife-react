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
import { SingleCompanyProducts } from '../Reducer/SingleBrandReducer';
import { OrderListsReducer } from '../Reducer/OrderListReducer';
import { NeccessaryProdReducer } from '../Reducer/NeccessaryProductsReducer';
import { GenericProductsReducer } from '../Reducer/GenericProductsReducer';
import { BlogListReducer } from '../Reducer/BlogListReducer';
import { SingleBlogReducer } from '../Reducer/SingleBlogReducer';
export const initialState = {
  loading: true,
  pages: [],
  //HomeContents
  categories: [],
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
  // Neccessary Page states
  neccessaryResults: [],
  neccessary_pages: [],
  //   Single Product details
  productDetails: {},
  suggestions: [],
  //   Search Results
  searchResults: [],
  search_pages: [],
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
  placingOrder: false,
  place_order_msg: '',
  order_error: '',
  // Single Company Products
  company_products: [],
  company_pages: [],
  // Order Lists
  orders: [],
  order_pages: [],
  // Generic Products States
  genericProducts: [],
  genericPages: [],
  // Blog List state
  blogLists: [],
  blogsPage: [],
  // Single Blog state
  singleBlog: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    HomeContent: HomeContentReducer,
    NeccessaryContent: NeccessaryProdReducer,
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
    SingleCompany: SingleCompanyProducts,
    OrderList: OrderListsReducer,
    GenericProducts: GenericProductsReducer,
    AllBlogs: BlogListReducer,
    SingleBlog: SingleBlogReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
