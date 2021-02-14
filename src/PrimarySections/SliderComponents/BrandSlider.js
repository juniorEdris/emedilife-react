import React from 'react'
import { connect } from 'react-redux'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export const BrandSlider = (props) => {
    const options = {
        loop: false,
        margin:15,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false,
            },
            700:{
                items:3,
                nav:false,
            },
            900:{
                items:5,
                nav:false,
            },
            1200:{
                items:6
            },
            
        },
      }
      
    const brands=[
        {
            id:1,
            image:'square.png',
            brand_name:'Square co. ltd',
        },
        {
            id:2,
            image:'ibnsina.png',
            brand_name:'Ibn Sina',
        },
        {
            id:3,
            image:'radiant.png',
            brand_name:'Radiant Ltd',
        },
        {
            id:4,
            image:'ibnsina.png',
            brand_name:'ibnsina Ltd',
        },
        {
            id:5,
            image:'square.png',
            brand_name:'square Ltd',
        },
        {
            id:6,
            image:'radiant.png',
            brand_name:'Radiant Ltd',
        },
        {
            id:7,
            image:'beacon.png',
            brand_name:'Radiant Ltd',
        },
        {
            id:8,
            image:'square.png',
            brand_name:'Radiant Ltd',
        },
    ]
    return (
        <div className='brand_section'>
            <OwlCarousel className='owl-theme' {...options}
            navText={['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}
            >
                {brands.map(brand=>(
                    <div className="brand_container col" key={brand.id}>
                        <img src={`./assets/images/featured_brands/${brand.image}`} alt={brand.brand_name}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrandSlider)
