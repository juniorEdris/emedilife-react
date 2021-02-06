import React from 'react'
import NavList from './SubComponents/NavList'
import NavRight from './SubComponents/NavRight'

function HeaderNav() {
    return (
        <div className='header_nav'>
            <NavList/>
            <NavRight/>
        </div>
    )
}

export default HeaderNav
