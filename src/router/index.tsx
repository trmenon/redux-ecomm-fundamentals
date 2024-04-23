import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import {ShopPage, CheckoutPage} from "../pages";

export const Router: React.FC = ()=> {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element={<ShopPage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/> }/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}