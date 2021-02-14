import React from 'react'
import { connect } from 'react-redux'
import  HomeSlider  from './Component/Banner'
import { FeatureBrands } from './Component/FeatureBrands'
import { Features } from './Component/Features'
import { OnlinePharma } from './Component/OnlinePharma'

export const index = (props) => {
    return (
        <div>
            <HomeSlider/>
            <Features/>
            <OnlinePharma/>
            <FeatureBrands/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
