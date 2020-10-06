import React from 'react';

const Product = (props) => {
    

    return (
        <div style={{ border: '3px solid lightGray' }}>
            <h2>{props.product.name} </h2>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;