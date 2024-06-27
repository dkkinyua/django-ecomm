import React from "react";
import { Link } from "react-router-dom";
import '../style.css'

const CategoryProducts = ({ category, products }) => {
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    )

    return (
        <div className="category-product">
            <h3>{category.name}</h3>
            <div className="row">
                {categoryProducts.map((product, index) => (
                    <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="card">
                            <img src={product.image} alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-text">$ {product.price}</h6>
                                <p className="card-text">{product.description}</p>
                                <small className="card-text">In Stock: {product.stock}</small>
                                <br/>
                                <Link to={`/products/${product.slug}`}><button className="btn btn-primary mt-1">View Product</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href={`#carousel-${category.id}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#carousel-${category.id}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default CategoryProducts;