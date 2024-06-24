import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../redux/actions/categoryActions'
import { fetchProducts } from '../redux/actions/productActions'
import CategoryProducts from './categoryProducts'
import FlashSale from './flashSale'
import CategoryList from './categoryList'
import TopSellingProducts from './topSellingProducts'

const HomePage = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.categories)
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch])

    const flashSaleProducts = products.filter(product => product.is_flashsale).slice(0, 5)

    return (
        <>
            <div>
                {/* First row, FlashSale and categories */}
                <div className='row'>
                    <div className='col-md-3'>
                        <CategoryList categories={categories} />
                    </div>
                    <div className='col-md-9'>
                        <FlashSale products={flashSaleProducts} />
                    </div>
                </div>
                {/* Second Row, Top selling products*/}
                <div className='row'>
                    <TopSellingProducts products={products} />
                </div>
                {/* Third, fourth and fifth rows, All Products in a category */}
                {categories.map((category) => (
                    <div className='row' key={category.id}>
                        <CategoryProducts category={category} products={products} />
                    </div>
                ))}
            </div>
        </>
    )

}


export default HomePage