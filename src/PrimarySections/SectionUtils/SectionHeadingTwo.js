import React from 'react'
import { connect } from 'react-redux'

const SectionHeadingTwo = (props) => {
    return (
        <div>
            <h6 className='section_heading_two'>{props.textOne} <span>{props.textTwo}</span></h6>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeadingTwo)
