import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const FlashSale = ({ products }) => {
    const history = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [products.length])

    const handleClick = () => {
        const product = products[currentIndex];
        history.push(`/products/${product.id}`);
    }

    return (
        <>
            <h3>Flash Sale</h3>
            <div className='flash-sale-slider'>
                {products.map((product, index) => (
                    <img key={index} src={product.image} alt={product.name} className={ index === currentIndex ? 'active' : ''} />
                ))}
            </div>

        </>
    )
}

export default FlashSale