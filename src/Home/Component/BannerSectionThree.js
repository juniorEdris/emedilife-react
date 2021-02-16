import React from 'react'
import { connect } from 'react-redux'
import WideBanner from '../../PrimarySections/SectionUtils/WideBanner'

const BannerSectionThree = (props) => {
    return (
        <div className='container'>
            <WideBanner imagepath={'banners/banner3.png'}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerSectionThree)
