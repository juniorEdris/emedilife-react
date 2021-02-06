import React from 'react'
import { connect } from 'react-redux'

export const ProductCart = (props) => {
    return (
        <div className='product_cart'>
            <div className="icon">
                <img src="assets/images/cart-icon.png" alt="cart-icon"/>
            </div>
            <div className="icon_name">
                <h5>Cart</h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart)
