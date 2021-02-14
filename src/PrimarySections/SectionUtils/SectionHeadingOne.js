import React from 'react'

function SectionHeadingOne(props) {
    return (
        <div>
            <h6 className='section_heading_one'>{props.fontStyleOne} <span>{props.fontStyleTwo}</span></h6>
        </div>
    )
}

export default SectionHeadingOne
