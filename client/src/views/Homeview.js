import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';

export default function Homeview() {

    const getAllProductsState = useSelector(state => state.getAllProductsReducer);

    const { loading, products, error } = getAllProductsState;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something went wrong!</h1>) : (products.map(product => {
                    return <div className='col-md-3 m-3 card p-2' key={product._id}>
                        <Product product={product} />
                    </div>
                }))}
            </div>
        </div>
    )
}