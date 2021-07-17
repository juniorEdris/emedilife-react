import React from 'react'
import { connect } from 'react-redux'

 const ExperienceArea = (props) => {
    return (
        <div className='experience_textarea '>
            <div className="form-row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className=' table_inputs_heading'>Experience (If any):</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className=' table_inputs_heading'>Training (If any):</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceArea)
