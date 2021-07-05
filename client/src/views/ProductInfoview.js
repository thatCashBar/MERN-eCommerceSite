import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { getProductById } from '../actions/productActions';

export default function ProductInfoview({ match }) {
    const productId = match.params.id;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const getProductByIdState = useSelector(state => state.getProductByIdReducer);
    const { product, loading, error } = getProductByIdState;

    function _addToCart() {
        dispatch(addToCart(product, quantity));
    }

    useEffect(() => {
        dispatch(getProductById(productId))
    }, [])

    return (
        <div>

            {loading ? (<h1>Loading...</h1>)
                : error ? (<h1>Something went wrong!</h1>)
                    : <div className="row mt-3">
                        <div className="col-md-6">
                            <div className="card p-2 m-3">
                                <h1 style={{ margin: '8px auto' }}>{product.name}</h1>
                                <img src={product.image} className='big-img' style={{ margin: '0 auto' }} />
                                <p style={{margin: '16px auto 0 auto'}}>{product.description}</p>
                            </div>
                        </div>

                        <div className="col-md-6 text-start">
                            <div className="m-2">
                                <h1>Price : {product.price}</h1>
                                <hr />
                                <h1>Select Quantity</h1>
                                <select value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                    {[...Array(product.countInStock).keys()].map((x, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}
                                </select>
                                <hr />
                                <button className='btn btn-dark' onClick={_addToCart}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>}

        </div>
    )
}