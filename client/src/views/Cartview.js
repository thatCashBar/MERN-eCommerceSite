import React from 'react'
import { useState, useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions';

export default function Cartview() {

    const cartReducerState = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const { cartItems } = cartReducerState;

    var subTotal = cartItems.reduce((acumulator, item) => acumulator + (item.price * item.quantity), 0);

    return (

        <div>

            <div className="row mt-3 justify-content-center">
                <div className="col-md-8 card">

                    <h1 className="text-center m-5">MY CART</h1>

                    <table className="table table-bordered">

                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems.map(item => {
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <select value={item.quantity} onChange={(e) => { dispatch(addToCart(item, e.target.value)) }}>
                                            {[...Array(item.countInStock).keys()].map((x, i) => {
                                                return <option value={i + 1}>{i + 1}</option>
                                            })}
                                        </select>
                                    </td>
                                    <td>{item.quantity * item.price}</td>
                                    <td><i class="far fa-trash-alt" onClick={() => dispatch(deleteFromCart(item))} style={{ cursor: 'pointer ' }}></i></td>
                                </tr>

                            })}
                        </tbody>

                    </table>

                    <hr />
                    <h2 className='text-center'>SubTotal : ${subTotal}</h2>
                    <hr />
                    <button className='btn' style={{margin: '0 auto 16px auto'}}>PAY NOW</button>

                </div>
            </div>

        </div>

    )
}
