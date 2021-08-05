import React from 'react'
import { connect } from 'react-redux'

const VolunteerInputs = (props) => {
    return (
        <div className='volunteer_inputs_wrapper'>
            <div className="col-12 d-flex flex-wrap ">
            <div className="col-12 col-lg-4  p-0">
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="full_name">Full name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="full_name"  placeholder='Full Name'  required onChange={props.inputEvent} value={props.form.full_name}/>
                        {props.form.full_name === '' && (
                        <small className="text-danger">
                        Please provide your full name.
                        </small>
                    )}
                    </div>
                        </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="dob">Date of birth</label>
                                <input type="date" className="form-control uparzon-input-lg" id="dob" onChange={props.inputEvent} value={props.form.dob} required />
                                {props.form.dob === '' && (
                                    <small className="text-danger">
                                    Please provide your birth date.
                                    </small>
                                )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="age">Age</label>
                        <input type="text" className="form-control uparzon-input-lg" id="age" placeholder={'Age in number'} required onChange={props.inputEvent} value={props.form.age} />
                        {props.form.age === '' && (
                            <small className="text-danger">
                            Please provide your age.
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name">Father's name</label>
                                <input type="text" className="form-control uparzon-input-lg" id="father_name" placeholder='Fathers Name' required onChange={props.inputEvent} value={props.form.father_name} />
                                {props.form.father_name === '' && (
                                    <small className="text-danger">
                                    Please provide your father name.
                                    </small>
                                )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                                <input type="text" className="form-control uparzon-input-lg" id="mother_name" placeholder='Mothers Name' required onChange={props.inputEvent} value={props.form.mother_name} />
                                {props.form.mother_name === '' && (
                                    <small className="text-danger">
                                    Please provide your mother name.
                                    </small>
                                )}
                    </div>
                        </div>
                <div className="col-12 p-1">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="present_address">Present Address</label>
                            <textarea className="form-control" id="present_address" rows={3} onChange={props.inputEvent} value={props.form.present_address} />
                            {props.form.present_address === '' && (
                                <small className="text-danger">
                                Please provide your present address.
                                </small>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-1">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="permanent_address">Permanent Address</label>
                            <textarea className="form-control" id="permanent_address" rows={3} onChange={props.inputEvent} value={props.form.permanent_address} />
                            {props.form.permanent_address === '' && (
                                <small className="text-danger">
                                Please provide your permanent address.
                                </small>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                </form>
                </div>
                <div className="col-12 col-lg-8">
                    <div className="d-flex flex-wrap">
                <div className="col-12 col-lg-6 ">
                <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="mobile">Mobile</label>
                            <input type="text" className="form-control uparzon-input-lg" id="mobile" placeholder='Mobile'  required  onChange={props.inputEvent} value={props.form.mobile}/>
                            {props.form.mobile === '' && (
                                <small className="text-danger">
                                Please provide your contact number.
                                </small>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                            <input type="text" className="form-control uparzon-input-lg" id="email" placeholder='Email' required  onChange={props.inputEvent} value={props.form.email}/>
                            {props.form.email === '' && (
                                <small className="text-danger">
                                Please provide your email.
                                </small>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                                <div className="col-12 mb-3">
                        <div className="form-group">
                                        
                        <label htmlFor="nid">NID</label>
                            <input type="text" className="form-control uparzon-input-lg" id="nid" placeholder='NID no.' required  onChange={props.inputEvent} value={props.form.nid}/>
                            {props.form.nid === '' && (
                                <small className="text-danger">
                                Please provide your nid no.
                                </small>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="gender">Gender:</label>
                    <select className="custom-select uparzon-input-lg" id="gender" required  onChange={props.inputEvent} >
                        <option selected value=''>Choose gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    {props.form.gender === '' && (
                        <small className="text-danger">
                            Please select your gender.
                        </small>
                    )}
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="religion">Religion:</label>
                    <select className="custom-select uparzon-input-lg" id="religion" required  onChange={props.inputEvent}>
                        <option selected value=''>Choose religion</option>
                        <option value='islam'>Islam</option>
                        <option value='hindu'>Hindu</option>
                        <option value='other'>Other</option>
                    </select>
                    {props.form.religion === '' && (
                        <small className="text-danger">
                            Please select your religion.
                        </small>
                    )}
                    </div>
                    </div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="present_status">Your Present Status</label>
                            <textarea className="form-control" id="present_status" rows={3}  onChange={props.inputEvent} value={props.form.present_status} />
                            {props.form.present_status === '' && (
                                <small className="text-danger">
                                    Please select your present status.
                                </small>
                            )}
                        </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerInputs)
