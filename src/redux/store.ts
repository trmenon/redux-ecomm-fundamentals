import { configureStore} from "@reduxjs/toolkit";
import { listReducers} from "./slices";

const store = configureStore({
    reducer: {
        list: listReducers,
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;