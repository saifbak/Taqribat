/* eslint-disable prettier/prettier */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import UserReducer from './UserReducer';
// import SignupReducer from './SignupReducer';
// import WishlistReducer from './WishlistReducer';
// import StorelistReducer from './StorelistReducer';
// import FeedlistReducer from './FeedsReducer';
// import UserlistReducer from './UserlistReducer';
// import MyFriendlistReducer from './MyFriendlistReducer';
// import NotificationsReducer from './NotificationsReducer';
// import MyBankAccountsReducer from './MyBankAccountsReducer';
const AppReducer = combineReducers({
    UserReducer,
    // SignupReducer,
    // WishlistReducer,
    // StorelistReducer,
    // FeedlistReducer,
    // UserlistReducer,
    // MyFriendlistReducer,
    // NotificationsReducer,
    // MyBankAccountsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    AppReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
