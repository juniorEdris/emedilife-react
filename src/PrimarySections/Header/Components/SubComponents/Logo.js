import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <>
        <Link to='/'>
            <img
                className='header__logo'
                src={'assets/svg/logo_svg/logo.svg'}
                alt='amazon Logo'
            />            
        </Link>
        </>
    )
}

export default Logo
