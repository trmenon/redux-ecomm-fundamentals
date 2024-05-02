import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ProductSliceProps, ItemProps} from "../../../models";
import { fetchProducts} from "../../thunks";

interface ManageItemPayloadProps {
    itemId: number;
    count: number;
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
    reducers: {
        decrementItemByNumber(state, action: PayloadAction<ManageItemPayloadProps>){
            const {count, itemId} = action.payload;
            return {
                ...state,
                products: state?.products.map((item: ItemProps)=> {
                    if(item?.id === itemId){
                        return {
                            ...item,
                            quantity: item?.quantity - count,
                            rating: {
                                ...item?.rating,
                                count: item?.rating?.count - count
                            }
                        }
                    }
                    return item;
                })
            }           
        },
        incrementItemByNumber(state, action: PayloadAction<ManageItemPayloadProps>){
            const {count, itemId} = action.payload;
            return {
                ...state,
                products: state?.products.map((item: ItemProps)=> {
                    if(item?.id === itemId){
                        return {
                            ...item,
                            quantity: item?.quantity + count,
                            rating: {
                                ...item?.rating,
                                count: item?.rating?.count + count
                            }
                        }
                    }
                    return item;
                })
            }           
        },
    },
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
export const { decrementItemByNumber, incrementItemByNumber } = listSlice.actions;