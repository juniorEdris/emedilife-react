import React from 'react'

function SectionHeadingOne(props) {
    return (
        <div>
            {props.reverse? <h6 className='section_heading_one'><span>{props.fontStyleOne}</span> {props.fontStyleTwo}</h6>:<h6 className='section_heading_one'>{props.fontStyleOne} <span>{props.fontStyleTwo}</span></h6>}
        </div>
    )
}

export default SectionHeadingOne
