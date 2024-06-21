import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/actions/categoryActions'
import { fetchProducts } from '../redux/actions/productActions'


const HomePage = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories)
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch])
}

    return (
        <>
            <div>
                <h1>HomePage</h1>
            </div>
            <div>
                {products}
            </div>
            <div>
                {categories}
            </div>
        </>
    )