import React from 'react'
import { connect } from 'react-redux'

export const UserDropdown = (props) => {
    return (
        <div className='header_user'>
            <div className='header__option'>
                <span className='header__option__lineOne'>Sign In</span>
                <span className='header__option__lineTwo'>My Account</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
