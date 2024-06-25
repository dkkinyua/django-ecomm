import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = ({ products, product }) => {
    const currentCategory = product.currentCategory
    const relatedProducts = products.filter(p => p.category === currentCategory && p.id !== product.id)

    return (
        <>
        {/* Product Information */}
            <h3>{product.name}</h3>
            <div className='product-details'>
                <div className='product-image'>
                    <img src={product.image} alt={product.name} />
                </div>

                <div className='product-info'>
                    <h4>{product.name}</h4>
                    <p>Description: {product.description}</p>
                    <p>Price: $ {product.price}</p>
                    <small>In Stock {product.stock}</small>
                </div>
            </div>

        {/* Vendor Information */}
            <div className='vendor-info'>
                <h5>Product's vendor: <Link to={`/products/${product.vendor.id}`}>{product.vendor}</Link></h5>
                <p>Contact details: {product.vendor.contact_details}</p>
            </div>

        {/* Shipping Info */}
            <div className='shipping-info'>
                <h3>Shipping Information:</h3>
                <p><Link to={product.shipping_policy}>Click Here</Link> for shipping policy.</p>
                <p><Link to={product.return_policy}>Click Here</Link> for return policy.</p>
            </div>
        
        {/* Reviews */}
            <div className='reviews'>
                <h3>Reviews: </h3>
                {product.reviews.map(review => (
                    <div key={review.id}>
                        <p>Rating: {review.rating}</p>
                        <p>Comments: {review.comment}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductDetails;