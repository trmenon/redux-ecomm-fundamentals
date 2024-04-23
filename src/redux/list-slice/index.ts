import { createSlice} from "@reduxjs/toolkit";
import { ItemProps} from "../../models";
import { itemsRepo} from "../../constants";

const listSlice = createSlice({
    name: "items",
    initialState: itemsRepo,
    reducers: {
        removeItem: (state, action)=> {
            const {payload} = action;
            state = state.filter(({id}: ItemProps)=> id === payload)
        },
    }
});

export const { removeItem} = listSlice.actions;
export default listSlice.reducer;