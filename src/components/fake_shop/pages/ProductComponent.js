import React from 'react';
import {useSelector} from "react-redux";

function ProductComponent(props) {

    const products = useSelector(state =>
        state.allProducts.products);
    const renderList = products.map(product => {
        return(
            <div key={product.id}>
                <h1>{product.title}</h1>
                <h1>{product.price}</h1>
                <h1>{product.category}</h1>
            </div>
            )})
    return (

           <>
               {renderList}
           </>
    );
}

export default ProductComponent;