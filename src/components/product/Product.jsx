import React from 'react'
import './product.css'

const Product = ({ title, text }) => {
    return (
        <div className='lt__product-container-product'>
            <div className='lt__product-container-product-title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='lt__product-container-product-text'>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Product