import React from 'react'
import { connect } from 'react-redux'
import HamBurger from './SubComponents/HamBurger'
import Logo from './SubComponents/Logo'
import CartIcon from './SubComponents/ProductCart'
import Search  from './SubComponents/Search'
import { UserDropdown } from './SubComponents/UserDropdown'

export const HeaderTopSection = (props) => {
    return (
        <div className='header_top_area'>
            <HamBurger/>
            <Logo/>
            <Search/>
            <UserDropdown/>
            <CartIcon/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTopSection)