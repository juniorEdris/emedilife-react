import React from 'react'
import { connect } from 'react-redux'

 const ExperienceArea = (props) => {
    return (
        <div className='experience_textarea '>
            <div className="form-row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="experience" className='text-color-theme table_inputs_heading'>Experience (If any):</label>
                        <textarea className="form-control" id="experience" rows={3} onChange={props.inputEvent} value={props.form.experience}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="training" className='text-color-theme table_inputs_heading'>Training (If any):</label>
                        <textarea className="form-control" id="training" rows={3} onChange={props.inputEvent} value={props.form.training} />
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


