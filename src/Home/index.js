import React from 'react'
import { connect } from 'react-redux'
import  HomeSlider  from './Component/Banner'

export const index = (props) => {
    return (
        <div>
            <h3>Home Section</h3>
            <HomeSlider/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
