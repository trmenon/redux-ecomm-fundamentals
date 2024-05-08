import React from 'react';
import { CheckoutItemCardComponentProps} from "../../models";
import useCheckoutItemController from './controller';
import styles from './CheckoutItemCard.module.scss';

// MUI Imports
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

// Icon Imports
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

export const CheckoutItemCard: React.FC<CheckoutItemCardComponentProps> = ({
    itemId,
    title,
    image,
    category,
    netPrice,
    quantity
})=> {
    // Globals
    const { isDeletable, controllerMethods} = useCheckoutItemController(itemId);

    // Renderer
    return(
        <React.Fragment>
            <div className={styles["checkout-item-card-wrapper"]}>
                <div className={styles["checkout-item-card-padded"]}>
                    <div className={styles["checkout-item-card"]}>
                        <div className={styles["description-section"]}>
                            <div className={styles["image-layer"]}>
                                <Avatar 
                                    variant={"rounded"}
                                    alt={title} 
                                    src={image}
                                    sx={{width: '100%', height: '100%', border: '1px solid #111212'}}
                                />
                            </div>
                            <div className={styles["product-description"]}>
                                <div className={styles["content-layer"]}>
                                    <Typography 
                                        variant={"h6"} 
                                        sx={{
                                            color: "#111212", 
                                            fontSize: '16px', 
                                            fontWeight: 600,
                                            overflow: 'hidden', 
                                            textOverflow: 'ellipsis', 
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                </div>
                                <div className={styles["content-layer"]}>
                                    <Typography 
                                        variant={"subtitle1"} 
                                        sx={{color: "#737676", fontSize: '12px', fontWeight: 500}}
                                    >
                                        {category}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={styles["controller-section"]}>
                            {
                                isDeletable?
                                    <IconButton 
                                        sx={{color: "#f40000"}} 
                                        onClick={controllerMethods.handleDestroy}
                                    >
                                        <DeleteIcon/>
                                    </IconButton>
                                    :
                                    <IconButton
                                        sx={{color: "#105ff4"}}
                                        onClick={controllerMethods.handleDecrement}
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>
                            }
                            <div className={styles["quantity-container"]}>
                                <Typography 
                                    variant={"subtitle1"} 
                                    sx={{color: "#111212", fontSize: '16px', fontWeight: 600}}
                                >
                                    {quantity}
                                </Typography>
                            </div>
                            <IconButton
                                sx={{color: "#105ff4"}}
                                onClick={controllerMethods.handleIncrement}
                            >
                                <ExpandLessIcon/>
                            </IconButton>
                        </div>
                        <div className={styles["pricing-section"]}>
                            <Typography 
                                variant={"subtitle1"} 
                                sx={{color: "#282323", fontSize: '12px', fontWeight: 600}}
                            >
                                {`Rs. ${netPrice}/-`}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}