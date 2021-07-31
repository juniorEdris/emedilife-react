import React from 'react'
import { connect } from 'react-redux'

const SalaryInput = (props) => {
    return (
        <div className='salary_inputs mb-2 mt-2 '>
            <div className="form-row">
                <div className="col-8 col-md-4 mb-3">
                <label htmlFor="expected_salary" className='table_inputs_heading text-color-theme'>Expected Salary(Per Month)</label>
                    <input type="text" className="form-control uparzon-input-lg" id="expected_salary" required onChange={props.inputEvent} value={props.form.expected_salary}/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SalaryInput)
