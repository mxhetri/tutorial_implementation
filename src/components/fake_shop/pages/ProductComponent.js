import React from 'react';
import {useSelector} from "react-redux";
import './fakeShop.css'
import {Link} from "react-router-dom";

function ProductComponent(props) {

    const products = useSelector(state =>
        state.allProducts.products);

    const renderList = products.map(product => {

        return(
            // <div className='row'>

                <div key={product.id} className="col-4">
                    <Link to={`/fakeShop/product/${product.id}`}>
                    <img src={product.image} alt="product 1"/>
                    <h4>{product.title}</h4>
                    <div className="rating">
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star"/>
                        <i className="fas fa-star-half-alt"/>
                        <i className="far fa-star"/>
                    </div>
                    <p>{product.price}</p>
                    </Link>
                </div>

            // </div>

        )
    })
    return (
        <>
            <div className='row'>
                {renderList}
            </div>
        </>

    );
}

export default ProductComponent;