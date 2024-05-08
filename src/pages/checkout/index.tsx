import React from "react";
import { useNavigate } from "react-router-dom";
import useCheckoutController from "./controller";
import { ItemProps, CheckoutItemProps} from "../../models";
import styles from "./CheckoutPage.module.scss";

// Container
import { BillCardButton, CheckoutItemCard} from "../../components";



// MUI Imports
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const CheckoutPage: React.FC = ()=> {
    // Globals
    const navigate = useNavigate();
    const { items} = useCheckoutController();

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
                        <div className={styles["checkout-container"]}>
                            <div className={styles["checkout-header"]}>
                                <div className={styles["checkout-header-container"]}>
                                    <Typography
                                        variant={"h6"}
                                        sx={{color: "#3e3d42", fontWeight: 600, fontSize: '16px'}}
                                    >
                                        {`${items.length} items in cart`}
                                    </Typography>
                                    <BillCardButton 
                                        net={
                                            Math.round(items.reduce((
                                                initial: number,
                                                {netPrice}: CheckoutItemProps
                                            )=> {
                                                return initial + netPrice
                                            }, 0))
                                        }
                                    />
                                </div>                                
                            </div>
                            <div className={styles["checkout-body"]}>
                                <div className={styles["container"]}>
                                    <div className={styles["content-scrollable"]}>
                                        <div className={styles["checkout-items-listing"]}>
                                            {
                                                items.map(({
                                                    itemId,
                                                    title,
                                                    image,
                                                    category,
                                                    quantity,
                                                    netPrice
                                                }: CheckoutItemProps)=> {
                                                    return (
                                                        <div 
                                                            className={styles["list-item"]}
                                                            key={`checkout-item-${itemId}`}
                                                        >
                                                            <CheckoutItemCard 
                                                                itemId={itemId}
                                                                title={title}
                                                                category={category}
                                                                image={image}
                                                                netPrice={netPrice}
                                                                quantity={quantity}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}