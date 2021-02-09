import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import HamBurger from './SubComponents/HamBurger'
import Logo from './SubComponents/Logo'
import { ProductCart } from './SubComponents/ProductCart'
import { Search } from './SubComponents/Search'
import { UserDropdown } from './SubComponents/UserDropdown'

export const HeaderTop = (props) => {
    return (
        
        <nav className='header'>
            <HamBurger/>
            <Logo/>
            <Search/>
            <div className="header__right row align-items-center">
                <Link to="#" className='header__mobile_searchIcon d-md-none'>
                    <i className=" fas fa-search" title='search'></i>
                </Link>
                <div className='header__nav'>
                    <UserDropdown/>
                    <ProductCart/>
                </div>
            </div>
            
        </nav>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop)
