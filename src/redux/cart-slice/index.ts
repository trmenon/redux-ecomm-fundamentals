import { createSlice} from "@reduxjs/toolkit";

const initialState: number[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        removeItemFromCart: (state, action)=> {
            const {payload} = action;
            return state.filter((id: number)=> id !== Number(payload));
        },
        addItemToCart: (state, action)=> {
            const {payload} = action;
            return [...state, Number(payload)];
        }
    }
});

export const { addItemToCart, removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;