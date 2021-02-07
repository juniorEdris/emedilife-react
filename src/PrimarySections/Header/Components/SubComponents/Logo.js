import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className="logo_area">
                <Link to='/'>
                    <img src={'assets/svg/logo_svg/logo.svg'} alt=""/>
                </Link>
            </div>
    )
}

export default Logo
