import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { CartItemProps} from "../../../models";

const initialState: CartItemProps[] = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        construct(state, action: PayloadAction<number>){
            const id = action.payload;
            if(typeof id === "number") {
                return [...state, {itemId: id, count: 1}]
            }            
        },
        destruct(state, action: PayloadAction<number>){
            const id = action.payload;
            if(typeof id === "number") {
                return state.filter(({itemId}: CartItemProps)=> itemId !== id);
            }            
        },
    },
})

export default cartSlice.reducer;
export const { construct, destruct } = cartSlice.actions;