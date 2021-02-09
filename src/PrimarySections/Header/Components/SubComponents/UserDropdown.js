import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const UserDropdown = (props) => {
    return (
        <>
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__option__lineOne'>Sign In,</span>
                    <span className='header__option__lineTwo'>My Account</span>
                </div>
            </Link>
        </>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
