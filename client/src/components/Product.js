import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import Rating from 'react-rating';

export default function Product({ product }) {
    return (
        <div className="col-md-3 card m-3 p-2 text-start">
            <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                <img src={product.image} className="img-fluid" />
                <h1>{product.name}</h1>
                <Rating
                    style={{color: 'orange'}}
                    initialRating={product.rating}
                    emptySymbol={<i className="far fa-star" aria-hidden="true"></i>}
                    fullSymbol={<i className="fa fa-star" aria-hidden="true"></i>}
                    readonly={true}
                />
                <h1>Price : {product.price}</h1>
            </Link>
        </div>
    )
}