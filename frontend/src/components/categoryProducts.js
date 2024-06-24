import React from "react";
import { Link } from "react-router-dom";


const CategoryProducts = ({ category, products }) => {
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    )

    return (
        <>
            <h3>{category.name}</h3>
            <div className="carousel slide" id={`carousel-${category.id}`} data-ride='carousel'>
                <div className="carousel-inner">
                    {categoryProducts.map((product, index) => (
                        <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="card">
                                <img src={product.image} alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <h6 className="card-text">$ {product.price}</h6>
                                    <p className="card-text">{product.description}</p>
                                    <small className="card-text">In Stock: {product.stock}</small>
                                    <Link to={`/products/${product.slug}`}><button className="btn btn-primary">View Product</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    <a className="carousel-control-prev" href={`#category-${category.id}`} role="button" data-ride='prev'>
                        <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#category-${category.id}`} role="button" data-ride='next'>
                        <span className="carousel-control-next-icon" aria-hidden='true'></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default CategoryProducts;