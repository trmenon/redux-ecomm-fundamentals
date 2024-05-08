import React from "react";
import { CheckoutItemProps, CartItemProps, ItemProps } from "../../../models";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from '../../../redux/store';
import { manage} from '../../../redux/slices/wishlist-slice';
import { construct, destruct} from '../../../redux/slices/cart-slice';

const useCheckoutController = ()=> {
    // Globals
    const cartList = useSelector((state: any)=> state.cart);
    const { products} = useSelector((state: any)=> state.list);

    // States
    const [items, setItems] = React.useState<CheckoutItemProps[]>([]);

    // Helpers
    const getProductDetailsById = (item_id: number): ItemProps=> {
        let prod: ItemProps = {
            id: -1,
            category: "",
            title: "",
            description: "",
            price: -1,
            quantity: -1,
            image: "",
            rating: {rate: -1, count: -1}
        }

        const selected = products.find(({id}: ItemProps)=> id === item_id);
        if(selected) {
            return selected;
        }
        return prod;
    }

    // Effects
    React.useEffect(()=> {
        setItems(
            cartList.map(({count, itemId}: CartItemProps)=> {
                const {title, price, image, category} = getProductDetailsById(itemId);
                return {
                    itemId: itemId,
                    title: title,
                    quantity: count,
                    unitPrice: price,
                    netPrice: price*count,
                    image: image,
                    category: category
                }
            })
        );
    }, [cartList, products]);
    React.useEffect(()=> {console.log(items)}, [items])

    // Return
    return{
        items
    }
}

export default useCheckoutController;