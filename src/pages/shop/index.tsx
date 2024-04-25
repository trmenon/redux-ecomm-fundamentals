import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemProps} from "../../models";
import styles from "./ShopPage.module.scss";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../../redux/thunks";
import { AppDispatch } from '../../redux/store';


// MUI Imports
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Skeleton from '@mui/material/Skeleton';


export const ShopPage: React.FC = ()=> {
    // Globals
    const navigate = useNavigate();
    const {products, loading, error} = useSelector((state: any)=> state.list);
    
    
    const dispatch: AppDispatch = useDispatch();

    React.useEffect(()=> {dispatch(fetchProducts())}, [dispatch])

    // Events
    const navigateToCheckout = ()=> navigate('/checkout');
    

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
                            {
                                loading?
                                    <Skeleton
                                        variant={"rounded"}
                                        width={"90%"}
                                        height={"90%"}
                                    />
                                    :
                                    error?
                                        <Skeleton
                                            variant={"rounded"}
                                            width={"90%"}
                                            height={"90%"}
                                        />
                                        :
                                        <div className={styles["scrollable"]}>
                                            {
                                                products?.map(({
                                                    id,
                                                    price,
                                                    description,
                                                    title,
                                                    category,
                                                    image,
                                                    rating
                                                }: ItemProps)=> {
                                                    return (
                                                        <Card 
                                                            key={`item-card-key-${id}`} 
                                                            sx={{ maxWidth: 345}}
                                                        >
                                                            <CardHeader
                                                                title={title}
                                                                subheader={category}
                                                            />
                                                            <CardMedia
                                                                component="img"
                                                                height="148"
                                                                image={image}
                                                                alt="Paella dish"
                                                            />
                                                            <CardContent>
                                                                <div className={styles["description"]}>
                                                                    <div className={styles["description-content"]}>
                                                                        <Typography variant={"h6"} >
                                                                            {description}
                                                                        </Typography>
                                                                    </div>
                                                                </div>
                                                                
                                                                <Typography variant={"subtitle2"} >
                                                                <Typography variant={"subtitle2"} >
                                                                    {`${rating['rate']} user rating`}
                                                                </Typography>
                                                                    {`${price} Rs.`}
                                                                </Typography>
                                                            </CardContent>
                                                            <CardActions>                                                    
                                                                <Button>Add to cart</Button>                                       
                                                            </CardActions>
                                                        </Card>                                            
                                                    )
                                                })
                                            }
                                        </div>
                            }                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}