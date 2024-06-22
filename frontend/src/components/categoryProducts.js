import React from "react";
import { Link } from "react-router-dom";


const CategoryProducts = ({ category, products }) => {
    const categoryProducts = products.filter(
        (product) => product.category.id === category.id
    )

    return (
        <>
            <div className="carousel slide" id={`carousel-${category.id}`} data-ride='carousel'>
                <div className="carousel-inner">
                    {categoryProducts.map((product) => {
                        <div className="card">
                            <img src={product.image} alt={product.name}/>
                            <div>
                                <h5>{product.name}</h5>
                                <h6>$ {product.price}</h6>
                                <p>{product.description}</p>
                                <Link to={`/products/${product.slug}`}>View Product</Link>
                            </div>
                        </div>
                    })}
                <a className="carousel-control-prev" href={`category-${category.id}`} role="button" data-ride='prev'>
                    <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`category-${category.id}`} role="button" data-ride='next'>
                    <span className="carousel-control-next-icon" aria-hidden='true'></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
        </>
    )
}

export default CategoryProducts;