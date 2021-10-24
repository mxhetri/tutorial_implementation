import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../api/FakeShop";
import {setProducts} from "../../../redux/fakeShop/FakeShopActions";
import ProductComponent from "./ProductComponent";
import axios from "axios";

function ProductList(props) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts.products);

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err => {
                console.log("Error", err);
            });
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        // (async function () {
        //     const response = await getProducts();
        //     dispatch(setProducts(response.data))
        // })();
        fetchProducts();
    }, [])

    return (
        <div className='small-container'>
            <div className='row row-2'>
                <h2>All Products</h2>
                <select>
                    <option>Default Sorting</option>
                    <option>Sort by price</option>
                    <option>Sort by popularity</option>
                    <option>Sort by rating</option>
                    <option>sort by sale</option>
                    <option>Default Shorting</option>
                </select>
            </div>
        <ProductComponent/>
        </div>
    );
}

export default ProductList;