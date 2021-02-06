import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux'

export const Banner = (props) => {
    const banners=[
        {
            id:1,
            image:'',
        },
    ]
    return (
        <div className='home_slider'>
            <OwlCarousel
            
            >

            </OwlCarousel>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
