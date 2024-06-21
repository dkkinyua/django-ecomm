import React from "react";
import { Link } from 'react-router-dom'

const CategoryList = ({categories}) => {
    return(
        <div>
            <h3>Categories</h3>
            {categories.map((category) => {
                <ul>
                    <li key={category.id}>
                        <Link to={`/categories/${category.slug}`}>{category.name}</Link>
                    </li>
                </ul>
            })}
        </div>
    )
};

export default CategoryList