import React from 'react'
import { connect } from 'react-redux'
import  HomeSlider  from './Component/Banner'
import BannerSection from './Component/BannerSection'
import { FeatureBrands } from './Component/FeatureBrands'
import { Features } from './Component/Features'
import { OnlinePharma } from './Component/OnlinePharma'
import PopularProduct from './Component/PopularProduct'

export const index = (props) => {
    return (
        <div>
            <HomeSlider/>
            <Features/>
            <OnlinePharma/>
            <FeatureBrands/>
            <BannerSection/>
            <PopularProduct/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
