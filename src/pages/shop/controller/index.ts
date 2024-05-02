import React from 'react';
import { useNavigate } from "react-router-dom";
import { ItemProps,ProductSliceProps} from "../../../models"
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../../../redux/thunks";
import { AppDispatch } from '../../../redux/store';

const defaultProductSlice : ProductSliceProps = {
    loading: false,
    error: false,
    timestamp: new Date(Date.now() - 60 * 60 * 1000),
    products: []
}

const useProductListingController = ()=> {
    // Globals
    const navigate = useNavigate();
    const storeProduct = useSelector((state: any)=> state.list);
    const dispatch: AppDispatch = useDispatch();

    // States
    const [productStore, setProductStore] = React.useState<ProductSliceProps>(defaultProductSlice);
    const [search, setSearch] = React.useState<string>("");

    // Effects
    React.useEffect(()=> {dispatch(fetchProducts())}, [dispatch]);
    React.useEffect(()=> {setProductStore(storeProduct)}, [storeProduct]);

    // Controller Methods
    const navigateToCheckout = ()=> navigate('/checkout');
    const refresh = ()=> {
        setSearch("");
        dispatch(fetchProducts());
    }
    const updateSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    const handleSearch = ()=> {
        const { products} = productStore;
        const filteredProducts = products.filter((prod: ItemProps) =>
            prod.title.toLowerCase().includes(search.toLowerCase())
        );
        setProductStore({...productStore, products: filteredProducts})
    }
    const resetSearch = ()=> {
        setSearch("");
        setProductStore(storeProduct);
    }

    // Return
    return {
        productStore,
        search,
        controllerMethods: {
            refresh,
            navigateToCheckout,
            updateSearchField,
            handleSearch,
            resetSearch
        }
    }
}

export default useProductListingController;