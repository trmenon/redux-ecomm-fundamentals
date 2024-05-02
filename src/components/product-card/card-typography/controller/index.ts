import React from 'react';
import { CartItemProps} from '../../../../models';

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../../../../redux/store';
import { manage} from '../../../../redux/slices/wishlist-slice';
import { construct, destruct} from '../../../../redux/slices/cart-slice';

const useProductController = (id: number)=> {
    // Globals
    const wishlist = useSelector((state: any)=> state.wishlist);
    const cartList = useSelector((state: any)=> state.cart);
    const dispatch: AppDispatch = useDispatch();

    // States
    const [isWished, setIsWished] = React.useState<boolean>(false);
    const [isCarted, setIsCarted] = React.useState<boolean>(false);

    // React.useEffect
    React.useEffect(()=> {
        if(id && wishlist) {
            setIsWished(wishlist.includes(id));
        }
    }, [id, wishlist]);
    React.useEffect(()=> {
        if(id && cartList) {
            setIsCarted(cartList.some(({itemId}: CartItemProps) => itemId === id));
        }
    }, [id, cartList]);

    // Controller Methods
    const handleWishClick = ()=> dispatch(manage(id));
    const handleAddToCart = ()=> dispatch(construct(id));
    const handleRemoveFromCart = ()=> dispatch(destruct(id));
    

    return {
        isWished,
        isCarted,
        controllerMethods: {
            handleWishClick,
            handleAddToCart,
            handleRemoveFromCart
        }
    }
}

export default useProductController;