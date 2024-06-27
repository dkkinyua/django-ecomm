import React from "react";
import { Link } from 'react-router-dom'
import '../style.css'

const TopSellingProducts = ({ products }) => {
    const topSellingProducts = products
        .sort((a, b) => b.sales - a.sales)
        .slice(0, 10)

    return (
        <div>
            <h3>Top Selling Products</h3>
            <div className="row">
                {topSellingProducts.map(product => (
                    <div key={product.id} className="col-md-2 top-selling">
                        <div className="card h-100">
                            <Link to={`/product/${product.slug}`}>
                                <img src={product.image} alt={product.name} className="card-img-top" />
                            </Link>
                            <div className="card-body">
                                <h4>{product.name}</h4>
                                <h5>$ {product.price}</h5>
                                <small>Remaining: {product.stock}</small>
                                <Link to={`/product/${product.slug}`} className="btn btn-dark mt-2">View Product</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TopSellingProducts;