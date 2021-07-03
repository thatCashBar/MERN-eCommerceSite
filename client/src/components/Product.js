import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export default function Product({ product }) {
    return (
        <div>
            <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                <img src={product.image} className="img-fluid" />
                <h1>{product.name}</h1>
                <div style={{display: 'flex'}}>
                    <Rating
                        style={{ color: 'orange'}}
                        initialRating={product.rating}
                        emptySymbol={<i className="far fa-star" aria-hidden="true"></i>}
                        fullSymbol={<i className="fa fa-star" aria-hidden="true"></i>}
                        readonly={true}
                    />
                </div>
                <h1>Price : {product.price}</h1>
            </Link>
        </div>
    )
}