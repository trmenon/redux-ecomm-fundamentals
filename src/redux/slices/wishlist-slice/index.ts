import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type wishlistProps = number[];
const initialState: wishlistProps = [];

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        manage(state, action: PayloadAction<number>){
            const id = action.payload;
            if(typeof id === "number") {
                if(state.includes(id)) {
                    return state.filter(item=> item !== id);
                }else {
                    return [...state, action.payload]
                }
            }            
        }
    },
})

export default wishlistSlice.reducer;
export const { manage } = wishlistSlice.actions;