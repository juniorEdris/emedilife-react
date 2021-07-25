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
                        <input type="text" className="form-control uparzon-input-lg" id="full_name"  placeholder='Full Name'  required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="age">Age</label>
                        <input type="text" className="form-control uparzon-input-lg" id="age"    required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name">Father's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name"  placeholder='Fathers Name'  required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name"  placeholder='Mothers Name'  required/>
                    </div>
                        </div>
                <div className="col-12 p-1">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="present_address">Present Address</label>
                            <textarea className="form-control" id="present_address" rows={3} defaultValue={""} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 p-1">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="permanent_address">Permanent Address</label>
                            <textarea className="form-control" id="permanent_address" rows={3} defaultValue={""}/>
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
                            <input type="text" className="form-control uparzon-input-lg" id="mobile" placeholder='Mobile'  required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                            <input type="text" className="form-control uparzon-input-lg" id="email" placeholder='Email' required />
                        </div>
                    </div>
                    <div className="form-row">
                                <div className="col-12 mb-3">
                        <div className="form-group">
                                        
                        <label htmlFor="nid_no">NID</label>
                            <input type="text" className="form-control uparzon-input-lg" id="nid_no" placeholder='NID no.' required/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="sex">Sex:</label>
                    <select className="custom-select uparzon-input-lg" id="sex" required >
                        <option selected disabled value>Choose gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='other'>Other</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="religion">Religion:</label>
                    <select className="custom-select uparzon-input-lg" id="religion" required >
                        <option selected disabled value>Choose religion</option>
                        <option value='islam'>Islam</option>
                        <option value='hindu'>Hindu</option>
                        <option value='other'>Other</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select a valid state.
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="present_status">Your Present Status</label>
                            <textarea className="form-control" id="present_status" rows={3} defaultValue={""} />
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
