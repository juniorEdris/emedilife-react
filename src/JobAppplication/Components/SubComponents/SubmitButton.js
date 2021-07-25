import React from 'react'
import { connect } from 'react-redux'

const SubmitButton = (props) => {
    return (
        <div className='submit_btn text-center pt-2 pb-2 mb-2 mt-2'>
            <button className='btn career_btn col-8 col-lg-8 pt-2 pb-2 text-light' type='button'>Submit</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
