import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../api/FakeShop";
import {setProducts} from "../../../redux/fakeShop/FakeShopActions";
import ProductComponent from "./ProductComponent";

function ProductList(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        (async function (){
            const response = await getProducts();
            dispatch(setProducts(response.data))
        })();
    }, [])

    return (
        <div>
            <ProductComponent/>
        </div>
    );
}

export default ProductList;