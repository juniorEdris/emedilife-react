import React from 'react'
import { connect } from 'react-redux'
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner'

const BannerSectionTwo = (props) => {
    return (
        <div className="container">
            <WideBanner imagepath={'banners/banner2.png'}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerSectionTwo)
