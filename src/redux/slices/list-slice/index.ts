import { createSlice} from "@reduxjs/toolkit";
import { ItemProps} from "../../../models";
import { fetchProducts} from "../../thunks";

interface ProductSliceProps {
    loading: boolean;
    error: boolean;
    timestamp: string;
    products: ItemProps[];
}

const initialState : ProductSliceProps = {
    loading: false,
    error: false,
    timestamp: "",
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
                    loading: true,
                    error: false,
                    timestamp: "",
                    products: []
                }
            })
            .addCase(fetchProducts.fulfilled, (state, action)=> {
                return {
                    loading: false,
                    error: false,
                    timestamp: "",
                    products: action.payload
                }
            })
            .addCase(fetchProducts.rejected, (state, action)=> {
                return {
                    loading: false,
                    error: true,
                    timestamp: "",
                    products: []
                }
            })
    }
});

export default listSlice.reducer;