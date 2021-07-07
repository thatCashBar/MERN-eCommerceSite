import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Navbar() {

    const cartReducer = useSelector(state => state.cartReducer);
    const { cartItems } = cartReducer;

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Jax Atlantic</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="/login">Login</a>
                            <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i>{cartItems.length}</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}