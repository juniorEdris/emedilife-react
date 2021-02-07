import React from 'react'
import { Link } from 'react-router-dom'

function HamBurger() {
    return (
        <div className='ham-burger'>
            <Link to='#'>
                <span></span>
                <span></span>
                <span></span>
            </Link>
        </div>
    )
}

export default HamBurger
