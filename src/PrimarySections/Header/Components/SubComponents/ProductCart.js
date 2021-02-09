import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const ProductCart = (props) => {
    return (
        <div>
            <Link to='/cart' className='header__link2'>
                <div className='header__option__basket'>
                    <div className="icon">
                        <img src="assets/images/cart-icon.png" alt="cart-icon"/>
                        {/* <span className='header__option__lineTwo basket__count'>{'1'}</span> */}
                    </div>
                    <div className="icon_name d-none d-md-block">
                        <span>Cart</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart)
