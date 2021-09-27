import React from 'react';
import Header from "./pages/Header";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function FakeShopApp(props) {
    return (
        <div>
            <Route path='/fakeShop' component={Header} />
            <Switch>
                <Route path='/fakeShop/product/:productId' component={ProductDetail} exact/>
                <Route path='/fakeShop/productList' component={ProductList} exact />
                <Route path='/fakeShop/cart' component={Cart}/>
                {/*<Route >404 Not Found</Route>*/}
            </Switch>
        </div>
    );
}

export default FakeShopApp;