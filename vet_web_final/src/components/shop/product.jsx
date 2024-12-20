import React from 'react';

export const Product = (props) => {
    const {id, productName, productDesc, price, productImage} = props.data;
    return (
        <div className="product">
            <div className="productTitle">
                    <b>{productName}</b>
            </div>
            <div className="description">
                <p>{productDesc}</p>
                <p>Price ${price}</p>
            </div>
            <img src={productImage} />
            <div>
                <form method="post" action="#" class="addToCart">
                    <button type="submit" className="add-to-cart-btn">Add to Cart</button>
                </form>
            </div>
        </div>
    );
};