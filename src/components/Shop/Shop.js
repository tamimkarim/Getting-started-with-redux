import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        {name: 'Apple MacBook', id: '1'},
        {name: 'ASUS Laptop', id: '2'},
        {name: 'ASUS VivoBook', id: '3'},
        {name: 'HP Laptop', id: '4'},
        {name: 'Dell Laptop', id: '5'}

    ]
    return (
        <div>
            <h4>This is Shop</h4>
            {
            products.map(pd => <Product product = {pd}></Product>)
            
            }
        </div>
    );
};

export default Shop;