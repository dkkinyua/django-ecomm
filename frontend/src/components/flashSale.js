import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const FlashSale = ({ products }) => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [products.length])

    const handleClick = () => {
        const product = products[currentIndex];
        navigate(`/products/${product.id}`);
    }

    return (
        <>
            <h3>Flash Sale</h3>
            <div className='flash-sale-slider'>
                {products.length && (
                    <img 
                    key = {products[currentIndex].id}
                    src = {products[currentIndex].image}
                    alt = {products[currentIndex].name}
                    />
                )}
            </div>
        </>
    )
}

export default FlashSale