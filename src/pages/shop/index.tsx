import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemProps} from "../../models";
import styles from "./ShopPage.module.scss";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import {addItemToWishList, removeItemFromWishList } from "../../redux/wishlist-slice";
import { addItemToCart, removeItemFromCart} from "../../redux/cart-slice";


// MUI Imports
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export const ShopPage: React.FC = ()=> {
    // Globals
    const navigate = useNavigate();
    const items = useSelector((state: any)=> state.list);
    const wishlist = useSelector((state: any)=> state.wishlist);
    const cart = useSelector((state: any)=> state.cart);
    const dispatch = useDispatch();

    // Events
    const navigateToCheckout = ()=> navigate('/checkout');

    React.useEffect(()=> {console.log(wishlist)}, [wishlist]);
    

    // Renderer
    return(
        <React.Fragment>
            <div className={styles["shop-page-wrapper"]}>
                <div className={styles["header"]}>
                    <div className={styles["padded"]}>
                        <Typography
                            variant={"h6"}
                            sx={{color: "#1203db", fontWeight: 700}}
                        >
                            Shop
                        </Typography>
                        <Button variant={"contained"} color={"primary"} onClick={navigateToCheckout}>
                            Checkout
                        </Button>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["padded"]}>
                        <div className={styles["container"]}>
                            <div className={styles["scrollable"]}>
                                {
                                    items?.map(({
                                        id,
                                        price,
                                        description,
                                        title,
                                        quantity
                                    }: ItemProps)=> {
                                        return (
                                            <Card key={`item-card-key-${id}`} sx={{ minWidth: 275 }}>
                                                <CardContent>
                                                    <Typography variant={"h6"} >
                                                        {title}
                                                    </Typography>
                                                    <Typography variant={"subtitle2"} >
                                                        {description}
                                                    </Typography>
                                                    <Typography variant={"body1"} >
                                                        {`${quantity} left in stock`}
                                                    </Typography>
                                                    <Typography variant={"body1"} >
                                                        {`${price} Rs.`}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>                                                    
                                                    {
                                                        !wishlist.includes(id)?
                                                            <Button 
                                                                size="small"
                                                                fullWidth
                                                                color={"secondary"}
                                                                onClick={()=> dispatch(addItemToWishList(id))}
                                                            >
                                                                Add to Wishlist
                                                            </Button>
                                                            :
                                                            <Button 
                                                                size="small"
                                                                fullWidth
                                                                color={"error"}
                                                                onClick={()=> dispatch(removeItemFromWishList(id))}
                                                            >
                                                                Remove from Wishlist
                                                            </Button>
                                                    }                                                    
                                                </CardActions>
                                                <CardActions>                                                    
                                                    {
                                                        !cart.includes(id)?
                                                            <Button 
                                                                size="small"
                                                                fullWidth
                                                                color={"primary"}
                                                                onClick={()=> dispatch(addItemToCart(id))}
                                                            >
                                                                Add to cart
                                                            </Button>
                                                            :
                                                            <Button 
                                                                size="small"
                                                                fullWidth
                                                                color={"error"}
                                                                onClick={()=> dispatch(removeItemFromCart(id))}
                                                            >
                                                                Remove from cart
                                                            </Button>
                                                    }                                                    
                                                </CardActions>
                                            </Card>                                            
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}