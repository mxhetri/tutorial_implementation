import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../../../redux/fakeShop/FakeShopActions";
function ProductDetail(props) {

    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log('error')
            });
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        if (productId && productId !== '') fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])
    return (
        <div className="small-container product-detail">
            <div className="row">
                <div className="col-2">
                    <img src={product.image} id='product-img' alt="" width="100%"/>
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src={product.image} className="small-img" width="100%" alt=""/>
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} className="small-img" width="100%" alt=""/>
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} className="small-img" width="100%" alt=""/>
                            </div>
                            <div className="small-img-col">
                                <img src={product.image} className="small-img" width="100%" alt=""/>
                            </div>
                        </div>
                </div>
                <div className="col-2">
                    <p> Home / {product.category}</p>
                    <h1>{product.title}</h1>
                    <h4>{product.price}</h4>
                    <select>
                        <option>--Select Size--</option>
                        <option>XXl</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    {/*<input type="number" value="1"/>*/}
                    <a href="">
                        <button className="btn">Add to Cart</button>
                    </a>
                    <h3>Product Details <i className="fa fa-indent"/></h3>
                    <br/>
                        <p>
                            {product.description}
                        </p>
                </div>
            </div>
        </div>
);
}

export default ProductDetail;