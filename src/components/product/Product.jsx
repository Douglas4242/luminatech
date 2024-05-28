import React from 'react'
import './product.css'

const Product = ({ title, text, image }) => {
    return (
        <div className='lt__product'>
            <div className='lt__product-container-product'>
                <div className='lt__product-container-product-title'>
                    <div />
                    <h1>{title}</h1>
                </div>
                <div className='lt__product-container-product-text'>
                    <p>{text}</p>
                </div>
            </div>
            <div className='lt__product-image'>
                <img src={image} />
            </div>
        </div>
    )
}

export default Product