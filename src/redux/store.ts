import { configureStore} from "@reduxjs/toolkit";
import { listReducers, wishlistReducers, cartReducers} from "./slices";
import cartMiddleware from "./middlewares/cartMiddleware";

const store = configureStore({
    reducer: {
        list: listReducers,
        wishlist: wishlistReducers,
        cart: cartReducers,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(cartMiddleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = any;