import React from 'react'
import { connect } from 'react-redux'

const WideBanner = (props) => {
    return (
        <div className='wide_banner mb-3'>
        <div className='wide_banner_image'>
            <img src={`./assets/images/${props.imagepath}`} alt={``}/>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(WideBanner)
