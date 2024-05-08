import React from "react";
import { CartItemProps} from "../../../models";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../../../redux/store';
import { destruct, decrement, increment} from '../../../redux/slices/cart-slice';

const useCheckoutItemController = (item_id: number)=> {
    // Globals
    const cartList = useSelector((state: any)=> state.cart);
    const dispatch: AppDispatch = useDispatch();

    // States
    const [isDeletable, setIsDeletable] = React.useState<boolean>(false);
    const [cartItem, setCartItem] = React.useState<CartItemProps | null>(null);

    // Effects
    React.useEffect(()=> {
        if(item_id) {
            const item = cartList.find(({itemId}: CartItemProps)=> item_id === itemId);
            if(item) {
                setCartItem(item);
            }else {
                setCartItem(null);
            }
        }
    }, [item_id, cartList]);
    React.useEffect(()=> {
        if(cartItem) {
            setIsDeletable(cartItem?.count === 1);
        }
    }, [cartItem]);

    // Controller Methods
    const handleIncrement = ()=> dispatch(increment(item_id));
    const handleDecrement = ()=> dispatch(decrement(item_id));
    const handleDestroy = ()=> dispatch(destruct(item_id));

    // Return
    return{
        isDeletable,
        controllerMethods: {handleIncrement, handleDecrement, handleDestroy}
    }
}

export default useCheckoutItemController;