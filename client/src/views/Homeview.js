import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../components/Product'

export default function Homeview() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get('/api/products/getallproducts').then(result => {
            //console.log(result);
            setproducts(result.data);
        }).catch(error => {
            console.log(error);
        });
    });

    return (
        <div>
            <div className="row">

                {products.length > 0 && (products.map(product => {
                    return <div key={product._id}>
                        <Product product={product}/>
                        </div>
                }))}

            </div>
        </div>
    )
}