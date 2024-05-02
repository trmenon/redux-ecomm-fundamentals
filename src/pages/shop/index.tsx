import React from "react";
import useProductListingController from "./controller";
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
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

// Container Imports
import { ProductCard} from "../../components";


export const ShopPage: React.FC = ()=> {
    // Globals
    const navigate = useNavigate();
    const { 
        productStore, 
        search,
        controllerMethods
    } = useProductListingController();
    const { products, loading, error} = productStore;
    

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
                        <Button 
                            variant={"contained"} 
                            color={"primary"} 
                            onClick={controllerMethods.navigateToCheckout}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
                <div className={styles["body"]}>
                    <div className={styles["left-panel"]}>
                        <div className={styles["padded"]}>
                            <div className={styles["panel-card-container"]}>
                                <div className={styles["panel-card"]}>
                                    <div className={styles["panel-header-typography"]}>
                                        <Typography
                                            variant={'subtitle2'}
                                            sx={{color: '#241d1d', fontWeight: 500, fontSize: '18px', p:0}}
                                        >
                                            {`${products.length} listings`}                                    
                                        </Typography>
                                    </div>
                                    <Button 
                                        variant={"contained"} 
                                        color={"primary"} 
                                        fullWidth
                                        onClick={controllerMethods.refresh}
                                    >
                                        Refresh
                                    </Button>
                                </div>    
                            </div>  
                            <div className={styles["search-container"]}>
                                <TextField
                                    variant={'filled'}
                                    label="Search"
                                    value={search}
                                    onChange={controllerMethods.updateSearchField}
                                    placeholder="Search"
                                    fullWidth
                                />
                                <div className={styles["search-actions"]}>
                                    <Button 
                                        variant={"outlined"} 
                                        color={"primary"} 
                                        fullWidth
                                        onClick={controllerMethods.handleSearch}
                                    >
                                        Search
                                    </Button>
                                    <Button 
                                        variant={"outlined"} 
                                        color={"primary"} 
                                        fullWidth
                                        onClick={controllerMethods.resetSearch}
                                    >
                                        Reset
                                    </Button>
                                </div>                            
                            </div>                      
                        </div>
                    </div>
                    <div className={styles["right-panel"]}>
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
                                                    products?.map((product: ItemProps)=> {
                                                        return (
                                                            <ProductCard 
                                                                data={product}
                                                            />                                           
                                                        )
                                                    })
                                                }
                                            </div>
                                }                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={error || loading}
                autoHideDuration={6000}
                message={error? 'Error populating list': loading? 'Loading...': ''}
            />
        </React.Fragment>
    )
}