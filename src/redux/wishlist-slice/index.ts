import { PayloadAction, createSlice} from "@reduxjs/toolkit";

const initialState: number[] = [];

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        removeItemFromWishList: (state, action)=> {
            const {payload} = action;
            return state.filter((id: number)=> id !== payload)
        },
        addItemToWishList: (state, action)=> {
            const {payload} = action;
            return [...state, Number(payload)];
        },
        // ispresentInWishlist: (state, action)=> {
        //     const {payload} = action;
        //     state.includes(Number(payload));
        // }
    }
});

export const { removeItemFromWishList, addItemToWishList} = wishlistSlice.actions;
export default wishlistSlice.reducer;