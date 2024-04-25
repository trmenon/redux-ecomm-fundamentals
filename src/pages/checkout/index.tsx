import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemProps} from "../../models";
import styles from "./CheckoutPage.module.scss";

// Redux imports
import { useDispatch, useSelector } from "react-redux";



// MUI Imports
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const CheckoutPage: React.FC = ()=> {
    // Globals
    const navigate = useNavigate();
    // const items = useSelector((state: any)=> state.list);
    // const wishlist = useSelector((state: any)=> state.wishlist);
    // const cart = useSelector((state: any)=> state.cart);

    // Helpers
    // const getItemById = (key:number):ItemProps | null=> {
    //     const current = items.find(({id}: ItemProps)=> id === key);
    //     if(current) {
    //         return current;
    //     }
    //     return null;
    // }

    // const aggregate = ()=> {
    //     return cart.reduce((initial: number, acc: number)=> {
    //         console.log(`ACC: ${acc}`)
    //         console.log(`INIT: ${initial}`)
    //         return initial + items.find(({id}: ItemProps)=> id === acc)?.price ;
    //     }, 0)
    // }

    // Events
    const navigateHome = ()=> navigate('/');

    // Renderer
    return(
        <React.Fragment>
             <div className={styles["checkout-page-wrapper"]}>
                <div className={styles["header"]}>
                    <div className={styles["padded"]}>
                        <Typography
                            variant={"h6"}
                            sx={{color: "#1203db", fontWeight: 700}}
                        >
                            Checkout
                        </Typography>
                        <Button variant={"contained"} color={"primary"} onClick={navigateHome}>
                            Shop
                        </Button>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["padded"]}>
                        <div className={styles["container"]}>
                            <div className={styles["scrollable"]}>
                                <Stack spacing={2} sx={{width: '100%'}}>
                               
                               </Stack>
                               <div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}