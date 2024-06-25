import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className='card'>
            <img src={product.image} alt={product.name} className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.description}</p>
                <p className='card-text'>Price: ${product.price}</p>
                <Link to={`/products/${product.slug}`}><button className='btn btn-dark'>View Product</button></Link>
                <Link to={`/products/${product.slug}`}><button className='btn btn-success'>Add To Cart</button></Link>
            </div>
        </div>
    )
};

export default ProductCard;