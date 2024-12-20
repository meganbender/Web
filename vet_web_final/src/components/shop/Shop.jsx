import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';

function Shop() {
    return (
        <div className="shop">
            <div className='shopTitle'>
                <h2>Shop at Fish Creek Animal Clinic</h2>
            </div>
            <div className="products"> {PRODUCTS.map((product) => 
            (
                <Product data={product} key={product.id}/>
            ))}
            </div>
        </div>
        
    );
}

export default Shop;