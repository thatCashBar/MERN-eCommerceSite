import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';

export default function ProductInfoview({ match }) {
    const productId = match.params.id;

    const dispatch = useDispatch()

    const getProductByIdState = useSelector(state => state.getProductByIdReducer);
    const { product, loading, error } = getProductByIdState;

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return (
        <div>

            {loading ? (<h1>Loading...</h1>)
                : error ? (<h1>Something went wrong!</h1>)
                    : <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="card p-2 m-3">
                                <h1>{product.name}</h1>
                                <img src={product.image} className='img-fluid m-3 bigImg' />
                                <p>{product.description}</p>
                            </div>
                        </div>

                        <div className="col-md-6 text-start">
                            <div className="m-2">
                                <h1>Price : {product.price}</h1>
                                <hr />
                                <h1>Select Quantity</h1>
                                <select>
                                    {[...Array(product.countInStock).keys()].map((x, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}
                                </select>
                                <hr />
                                <button className='btn btn-dark'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>}

        </div>
    )
}