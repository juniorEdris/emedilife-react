import { connect } from 'react-redux'

const HeadInputs = (props) => {
    return (
        <div className='job_application col-12 d-flex flex-wrap header_input  p-0'>
         {props.position && <div className="col-12  p-0">
            <div className="form-row">
                <div className="col-12 mb-3">
                <label htmlFor="position">Position:</label>
                <select className="custom-select uparzon-input-lg" id="position" required onChange={ props.inputEvent}>
                    <option selected value=''>Choose position</option>
                    <option value='marketing-officer'>Marketing Officer</option>
                    <option value='pharmacist-grade-a'>Pharmacist(Grade-A)</option>
                    <option value='sourcing-officer'>Sourcing Officer</option>
                    <option value='computer-operator'>Computer Operator</option>
                    <option value='delivery-man'>Delivery Man</option>
                    <option value='office-staff'>Office Staff</option>
                </select>
                {props?.error?.position !== '' && (
                <small className="text-danger">
                  {props?.error?.position}
                </small>
              )}
                </div>
                </div>
         </div>}
         <div className="col-12 col-lg-4  p-0">
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="full_name">Full name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="full_name" onChange={props.inputEvent} placeholder='Full Name' value={props.form.full_name} required />
                {props?.error?.full_name !== '' && (
                    <small className="text-danger">
                        {props?.error?.full_name}
                    </small>
                )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="dob">Date of birth</label>
                        <input type="date" className="form-control uparzon-input-lg" id="dob" onChange={props.inputEvent}  value={props.form.dob} required />
                    {props?.error?.dob !== '' && (
                        <small className="text-danger">
                        {props?.error?.dob}
                        </small>
                    )}
                        </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name">Father's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name" onChange={props.inputEvent} placeholder='Fathers Name' value={props.form.father_name} required />
                        {props?.error?.father_name !== '' && (
                            <small className="text-danger">
                                {props?.error?.father_name}
                            </small>
                        )}
                        </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name" onChange={props.inputEvent} placeholder='Mothers Name' value={props.form.mother_name} required/>
                        {props?.error?.mother_name !== '' && (
                            <small className="text-danger">
                                {props?.error?.mother_name}
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                <div className="col-12 mb-3">
                <label htmlFor="gender">Gender:</label>
                <select className="custom-select uparzon-input-lg" id="gender" required onChange={ props.inputEvent}>
                    <option selected value=''>Choose gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                {props?.error?.gender !== '' && (
                        <small className="text-danger">
                            {props?.error?.gender}
                        </small>
                    )}
                </div>
                </div>
                <div className="form-row">
                <div className="col-12 mb-3">
                <label htmlFor="religion">Religion:</label>
                <select className="custom-select uparzon-input-lg" id="religion" required onChange={ props.inputEvent}>
                    <option selected value=''>Choose religion</option>
                    <option value='islam'>Islam</option>
                    <option value='hindu'>Hindu</option>
                    <option value='other'>Other</option>
                </select>
                {props?.error?.religion !== '' && (
                        <small className="text-danger">
                            {props?.error?.religion}
                        </small>
                    )}
                </div>
                </div>
            </div>
            <div className={`col-lg-8 col-12`}>
                <div className={` col-12 d-flex flex-wrap p-0`}>
                    <div className={`${props.no_upload_image ? "col-lg-12" : 'col-lg-8'} p-0`}>
                    <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="mobile">Mobile</label>
                            <input type="text" className="form-control uparzon-input-lg" id="mobile" onChange={props.inputEvent} placeholder='Mobile' value={props.form.mobile} required />
                    {props?.error?.mobile !== '' && (
                        <small className="text-danger">
                            {props?.error?.mobile}
                        </small>
                    )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                            <input type="text" className="form-control uparzon-input-lg" id="email" onChange={props.inputEvent} placeholder='Email' value={props.form.email} required />
                        {props?.error?.email !== '' && (
                        <small className="text-danger">
                            {props?.error?.email}
                        </small>
                    )}
                        </div>
                    </div>
                    <div className="form-row">
                                <div className="col-12 mb-3">
                        <div className="form-group">
                                        
                        <label htmlFor="nid">NID</label>
                            <input type="text" className="form-control uparzon-input-lg" id="nid" onChange={props.inputEvent} placeholder='NID no.' value={props.form.nid} required/>
                        {props?.error?.nid !== '' && (
                        <small className="text-danger">
                            {props?.error?.nid}
                        </small>
                    )}
                        </div>
                        </div>
                    </div>
                    </form>
                    </div>
                    <div className={`${props.no_upload_image ? 'd-none' : 'd-flex'} col-lg-4  align-items-center align-items-md-start flex-column `}>
                        <input type="file" className="file-input" id="photo" required onChange={props.imageEvent}/>
                        {props.form.photo !== '' ?
                            <div className="header_input_photo_section">
                                <div className="photo_section">
                                    {props.form.photo !== '' ? <img src={URL.createObjectURL(props.form.photo)} alt="" /> : <img src={props.form.photo} alt="" />}
                                </div>
                                <div className="w-100 text-center">
                                    <span className='another_photo_label' onClick={()=>props.setForm({
                                        ...props.form,photo:''
                                    })}>Remove photo</span>
                                </div>
                                </div>    
                            :
                            <label htmlFor="photo">
                            <span className='mb-2 d-block text-center'>Upload photo</span>
                            
                                <svg className='cursor_pointer' id='image' xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 254 264">
                                <g id="Group_67098" data-name="Group 67098" transform="translate(-1465 -326)">
                                    <g id="Rectangle_2726" data-name="Rectangle 2726" transform="translate(1465 326)" fill="#fff" stroke="#7a0553" stroke-width="1" stroke-dasharray="3">
                                    <rect width="254" height="264" rx="7" stroke="none"/>
                                    <rect x="0.5" y="0.5" width="253" height="263" rx="6.5" fill="none"/>
                                    </g>
                                    <text id="Drag_and_Drop_Photos_here" data-name="Drag and Drop Photos here" transform="translate(1582.678 446.271)" fill="#060606" font-size="17" font-family="SegoeUI, Segoe UI"><tspan x="-103.266" y="0">Drag and Drop Photos here</tspan></text>
                                    <text id="or" transform="translate(1594.641 492.795)" fill="#6a6a6a" font-size="22" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="-9.802" y="0">or</tspan></text>
                                    <g id="Group_67090" data-name="Group 67090" transform="translate(1503.222 537.671)">
                                    <text id="Choose_Photos" data-name="Choose Photos" transform="translate(102.861 23.556)" fill="#7a0553" font-size="18" font-family="SegoeUI, Segoe UI"><tspan x="-59.752" y="0">Choose Photos</tspan></text>
                                    <path id="Icon_material-add-a-photo" data-name="Icon material-add-a-photo" d="M4.539,6.039V1.5H7.565V6.039H12.1V9.065H7.565V13.6H4.539V9.065H0V6.039Zm4.539,9.078V10.578h4.539V6.039H24.209l2.769,3.026h4.8A3.035,3.035,0,0,1,34.8,12.091V30.248a3.035,3.035,0,0,1-3.026,3.026H7.565a3.035,3.035,0,0,1-3.026-3.026V15.117ZM19.669,28.735A7.565,7.565,0,1,0,12.1,21.169,7.568,7.568,0,0,0,19.669,28.735Zm-4.842-7.565a4.842,4.842,0,1,0,4.842-4.842A4.837,4.837,0,0,0,14.828,21.169Z" transform="translate(0 -1.5)" fill="#7a0553"/>
                                    </g>
                                    <g id="Group_67097" data-name="Group 67097">
                                    <g id="Icon_feather-upload-cloud" data-name="Icon feather-upload-cloud" transform="translate(1555.288 353.959)" opacity="0.31">
                                        <path id="Path_21287" data-name="Path 21287" d="M38.686,31.343,25.343,18,12,31.343" transform="translate(11.368 12.014)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                        <path id="Path_21288" data-name="Path 21288" d="M18,18V48.022" transform="translate(18.711 12.014)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                        <path id="Path_21289" data-name="Path 21289" d="M66.19,55.833A16.679,16.679,0,0,0,58.217,24.51h-4.2A26.686,26.686,0,1,0,8.181,48.861" transform="translate(-1.492 -4.503)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                        <path id="Path_21290" data-name="Path 21290" d="M38.686,31.343,25.343,18,12,31.343" transform="translate(11.368 12.014)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                    </g>
                                    </g>
                                    </g>
                                </svg>
                        
                            </label>
                        }
                    </div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="present_address">Present Address</label>
                            <textarea className="form-control" id="present_address" rows={3} onChange={props.inputEvent} value={props.form.present_address}/>
                            {props?.error?.present_address !== '' && (
                                <small className="text-danger">
                                    {props?.error?.present_address}
                                </small>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 ">
                <div className="form-row">
                        <div className="col-12 mb-3 p-0">
                        <div className="form-group">
                            <label htmlFor="permanent_address">Permanent Address</label>
                            <textarea className="form-control" id="permanent_address" rows={3} onChange={props.inputEvent} value={props.form.permanent_address}/>
                            {props?.error?.permanent_address !== '' && (
                                <small className="text-danger">
                                    {props?.error?.permanent_address}
                                </small>
                            )}
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
