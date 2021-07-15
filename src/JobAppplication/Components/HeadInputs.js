import { connect } from 'react-redux'

const HeadInputs = (props) => {
    return (
        <div className='col-12 d-flex header_input'>
         <div className="col-12 col-md-4">
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="full_name">Full name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="full_name" onChange={props.inputEvent} placeholder='Full Name' value={props.partTimeInfo.full_name} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="birth_date">Date of birth</label>
                        <input type="date" className="form-control uparzon-input-lg" id="birth_date" onChange={props.inputEvent}  value={props.partTimeInfo.birth_date} required />

                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name">Father's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name" onChange={props.inputEvent} placeholder='Fathers Name' value={props.partTimeInfo.father_name} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name" onChange={props.inputEvent} placeholder='Mothers Name' value={props.partTimeInfo.mother_name} required/>
                    </div>
                </div>
                <div className="form-row">
                <div className="col-12 mb-3">
                <label htmlFor="sex">Sex:</label>
                <select className="custom-select uparzon-input-lg" id="sex" required onChange={ props.inputEvent}>
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
                <select className="custom-select uparzon-input-lg" id="religion" required onChange={ props.inputEvent}>
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
            </form>
            </div>
            <div className="col-12 p-0 col-md-8 ">
                <div className=" col-12 d-flex flex-wrap">
                    <div className="col-md-8 ">
                    <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="mobile">Mobile</label>
                            <input type="text" className="form-control uparzon-input-lg" id="mobile" onChange={props.inputEvent} placeholder='Mobile' value={props.partTimeInfo.mobile} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                            <input type="text" className="form-control uparzon-input-lg" id="email" onChange={props.inputEvent} placeholder='Email' value={props.partTimeInfo.email} required />
                        </div>
                    </div>
                    <div className="form-row">
                                <div className="col-12 mb-3">
                        <div className="form-group">
                                        
                        <label htmlFor="nid_no">NID</label>
                            <input type="text" className="form-control uparzon-input-lg" id="nid_no" onChange={props.inputEvent} placeholder='NID no.' value={props.partTimeInfo.nid_no} required/>
                        </div>
                        </div>
                    </div>
                    </form>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center ">image upload arriving soon</div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="present_address">Present Address</label>
                            <textarea className="form-control" id="present_address" rows={3} defaultValue={""} onChange={props.inputEvent} value={props.partTimeInfo.present_address}/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="permanent_address">Permanent Address</label>
                            <textarea className="form-control" id="permanent_address" rows={3} defaultValue={""} onChange={props.inputEvent} value={props.partTimeInfo.permanent_address}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadInputs)
