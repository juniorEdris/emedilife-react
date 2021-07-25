import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop'
import './emedi_pertner.css'

const EmediPartner = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
    return (
        <div className='emedi_partner_wrapper mt-4 mb-4'>
            <div className="container-md-fluid">
                <header className="emedi_partner_wrapper_headlines">
                    <h1>Partner With Emedilife</h1>
                    <p>Are you producing pharmaceuticals products? Are you an Importer? Do you have any pharmacy? Are you a dealer of departmental products? If yes, and if you want to business 
                    with us and make money with commission based, please subscribe us. After subscribing, our officer will communicate with you.</p>

                    <div className="text-right mb-3">
                        <span className='emedi_partner_wrapper_subscribe'> Subscribe</span>
                    </div>

                    <div className="text-center"><span className=''>After getting OTP and fill out the code, he/she should be given the following information in prescribed format.....</span></div>
                </header>
                <main>
                    <div className="d-flex flex-wrap">
                        <div className="col-lg-4 col-12 ">
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="full_name">Full name</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="full_name" placeholder='Full Name' required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="birth_date">Birth Date</label>
                                    <input type="date" className="form-control uparzon-input-lg" id="birth_date" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="father_name">Father name</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="father_name" placeholder='Father Name' required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                            <div className="col-12 mb-3">
                            <label htmlFor="sex">Sex:</label>
                            <select className="custom-select uparzon-input-lg" id="sex" required>
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
                        </div>
                        {/* col ends here  */}
                        <div className="col-lg-4 col-12 ">
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="mobile_no">Mobile No.</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="mobile_no" placeholder='+88' required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control uparzon-input-lg" id="email" required placeholder='email' />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="nid_no">NID</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="nid_no" placeholder='NID no' required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            {/* <div className="form-row">
                            <div className="col-12 mb-3">
                            <label htmlFor="sex">Upload:</label>
                                <input type="file" className="form-control uparzon-input-lg" id="nid_no" placeholder='NID no' required />
                            <div className="invalid-feedback">
                                Please select a valid state.
                            </div>
                            </div>
                            </div> */}
                        </div>
                        {/* col ends here  */}
                        <div className={`d-flex col-lg-4  align-items-center flex-column `}>        
                        <label htmlFor="image mb-2">Upload photo</label> 
                        <svg className='cursor_pointer' id='image' xmlns="http://www.w3.org/2000/svg" width="254" height="254" viewBox="0 0 254 264">
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
                    </div>
                    </div>
                    <div className="mt-2">
                        <SubmitButton/>
                    </div>
                </main>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmediPartner)
