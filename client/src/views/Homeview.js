import React from 'react'
import Product from '../components/Product';
import products from '../products';

export default function Homeview() {
    return (
        <div>
            <div className="row">
                {products.map(product => {
                    return <Product product={product} />
                })}
            </div>
        </div>
    )
}