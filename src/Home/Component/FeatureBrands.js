import React from 'react'
import { connect } from 'react-redux'
import SectionHeadingOne from '../../PrimarySections/SectionUtils/SectionHeadingOne'
import { BrandSlider } from '../../PrimarySections/SliderComponents/BrandSlider'

export const FeatureBrands = (props) => {
    return (
        <div className='feature_brands'>
            <div className="container">
                <SectionHeadingOne fontStyleOne={'Feature'} fontStyleTwo={'Brands'}/>
                <div className="feature_slider ">
                        <BrandSlider/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureBrands)
