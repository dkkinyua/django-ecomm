import React from "react";

const FlashSale = ({ products }) => {
    const flashSaleProducts = products.filter((product) => product.isFlashSale)

    return(
        <div>
            <h1>Flash Sale page</h1>
            {products.map((product) => {
                <div className="carousel">
                    Carousel here
                </div>
            })}
        </div>
    )
}

export default FlashSale