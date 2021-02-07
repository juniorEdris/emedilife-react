import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux'

export const Banner = (props) => {
    const banners=[
        {
            id:1,
            image:'homeSlider.jpg',
        },
        {
            id:2,
            image:'homeSlider.jpg',
        },
    ]
    return (
<div className='home_slider'>
          <OwlCarousel 
            className="owl-theme"
            loop
            items={1}
            nav
            navSpeed={1000}
            navText={['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}
          >
              {banners?.length > 0 && banners?.map(banner=>(
                <div className="slider-area col-12" key={banner.id}>
                        <div className="single-slider d-flex align-items-center" style={{backgroundImage: `url()`}}> {/* .replace('demostore', 'store') assets/img/slider/slider1-home1.jpg*/}
                                <img className='slider_image' src={`./assets/images/${banner.image}`} alt=""/>
                        </div>
                </div>
              ))}
            
          </OwlCarousel>
          
        </div>

    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
