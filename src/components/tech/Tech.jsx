import React from 'react'
import './tech.css'

const Tech = ({ title, text }) => {
    return (
        <div className='lt__tech'>
            <div className='lt__tech-container'>
                <div className='lt__tech-container-title'>
                    <div />
                    <h1>{title}</h1>
                </div>
                <div className='lt__tech-container-text'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Tech
