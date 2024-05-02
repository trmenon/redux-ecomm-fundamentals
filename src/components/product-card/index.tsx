import React from 'react';
import useProductController from './card-typography/controller';
import { ProductCardComponentProps} from "../../models";
import styles from "./ProductCard.module.scss";

// Container Imports
import { CardTypography} from "./card-typography";

// MUI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Icons
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export const ProductCard: React.FC<ProductCardComponentProps> = ({ data})=> {
    
    // Stripping Vallues
    const {id, title, category, description, image, price, quantity, rating} = data;
    const { count, rate} = rating;

    // Globals
    const { isWished, isCarted, controllerMethods} = useProductController(id)

    // Renderer
    return(
        <React.Fragment>
            <Card sx={{ maxWidth: 300, width: 300}}>
                <div className={styles["product-card-wrapper"]}>
                    <div className={styles["card-header-container"]}>
                        <div className={styles["card-header-padded"]}>
                            <div className={styles["card-header"]}>
                                <div className={styles["card-title-container"]}>
                                    <div className={styles["text-wrapper"]}>
                                        <CardTypography variant={'title'}>{title}</CardTypography>
                                    </div>
                                    <div className={styles["text-wrapper"]}>
                                        <CardTypography variant={'subtitle'}>{count}</CardTypography>
                                    </div>
                                </div>                                
                                <div className={styles["card-title-actions"]}>
                                    <IconButton aria-label="settings">
                                        <InfoIcon />
                                    </IconButton>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                    <div className={styles["card-image-container"]}>
                        <div className={styles["card-image-padded"]}>
                            <CardMedia
                                component="img"
                                height="148"
                                image={image}
                                alt="Paella dish"
                            />
                        </div>
                    </div>
                    <div className={styles["card-footer-container"]}>
                        <div className={styles["card-footer-padded"]}>
                            <div className={styles["card-footer"]}>
                                <div className={styles["button-container"]}>
                                    {
                                        isCarted && (
                                            <Button
                                                variant={'contained'}
                                                color={'warning'}
                                                fullWidth
                                                startIcon={<RemoveShoppingCartIcon/>}
                                                onClick={controllerMethods.handleRemoveFromCart}
                                            >
                                                Remove
                                            </Button>
                                        )
                                    }
                                    {
                                        !isCarted && (
                                            <Button
                                                variant={'contained'}
                                                color={'info'}
                                                fullWidth
                                                startIcon={<AddShoppingCartIcon/>}
                                                onClick={controllerMethods.handleAddToCart}
                                            >
                                                Add
                                            </Button>
                                        )
                                    }
                                    
                                </div>
                                <IconButton onClick={controllerMethods.handleWishClick}>
                                    {isWished? 
                                        <FavoriteIcon style={{color: 'red'}}/>
                                        : 
                                        <FavoriteBorderIcon style={{color: 'red'}}/>
                                    }                                    
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Card>
        </React.Fragment>
    )
}