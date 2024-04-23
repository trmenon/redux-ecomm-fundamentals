import { configureStore} from "@reduxjs/toolkit";
import listReducers from "./list-slice";
import wishlistReducers from "./wishlist-slice";
import cartReducers from "./cart-slice";

const store = configureStore({
    reducer: {
        list: listReducers,
        wishlist: wishlistReducers,
        cart: cartReducers
    }
});

export default store;