import { createSlice} from "@reduxjs/toolkit";
import { ItemProps} from "../../../models";
import { fetchProducts} from "../../thunks";

interface ProductSliceProps {
    loading: boolean;
    error: boolean;
    timestamp: Date;
    products: ItemProps[];
}

const initialState : ProductSliceProps = {
    loading: false,
    error: false,
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    products: []
}

const listSlice = createSlice({
    name: "items",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
            .addCase(fetchProducts.pending, (state, action)=> {
                return {
                    ...state,
                    loading: true,
                    error: false,
                    products: []
                }
            })
            .addCase(fetchProducts.fulfilled, (state, action)=> {
                return {
                    loading: false,
                    error: false,
                    timestamp: new Date(),
                    products: action.payload
                }
            })
            .addCase(fetchProducts.rejected, (state, action)=> {
                return {
                    ...state,
                    loading: false,
                    error: true,
                    products: []
                }
            })
    }
});

export default listSlice.reducer;