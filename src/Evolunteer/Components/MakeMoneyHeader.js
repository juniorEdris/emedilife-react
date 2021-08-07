import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgreementRadio from '../../JobAppplication/Components/SubComponents/AgreementRadio';
import SubmitButton from '../../JobAppplication/Components/SubComponents/SubmitButton';
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links';
import SpinLoader from '../../PrimarySections/PageLoader/SpinLoader';
import { PopUp } from '../../PrimarySections/SectionUtils/PopUp';

const MakeMoneyHeader = (props) => {
    const [selected, setSelected] = useState(false);
    const [form, setForm] = useState({
        full_name: '',
        mobile: '',
        dob: '',
        age: '',
        email: '',
        father_name: '',
        mother_name: '',
        nid: '',
        gender: '',
        religion: '',
        marital_status: '',
        alt_mobile:'',
        active_mobile:'',
        present_address:'',
        permanent_address:'',
        experience_details:'',
        training_details:'',
        expected_salary: '',
        photo:'',
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: false,
        success: '',
        error:'',
        input_error: {
            full_name:'',
            dob:'',
            father_name:'',
            mother_name:'',
            age:'',
            gender:'',
            religion:'',
            mobile:'',
            email:'',
            nid:'',
            expected_salary:'',
            alternative_mobile:'',
            active_mobile:'',
            present_address:''
        }
    });
    const handlechange = e => {
        setForm({...form,[e.target.id]:e.target.value})
    }
    const imageEvent = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.files[0],
        })
    }
    const register = async e => {
        e.preventDefault()
        setAlert({
            status: false,
            success: '',
            error:'',
            input_error: {
                full_name:'',
                dob:'',
                father_name:'',
                mother_name:'',
                age:'',
                gender:'',
                religion:'',
                mobile:'',
                email:'',
                nid:'',
                expected_salary:'',
                alternative_mobile:'',
                active_mobile:'',
                present_address:''
            }
        })
        setLoading(true) 
        if (!selected) {
            setLoading(false)
            setAlert({
                status: true,
                error: 'select all the information is true...'
            })
            
        } else {
            await API().post(`${ENDPOINTS.EMEDI_E_VOLUNTEER}?name=${form.full_name}&age=${form.age}&dob=${form.dob}&mobile=${form.mobile}&alternative_mobile=${form.alt_mobile}&active_mobile=${form.active_mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&present_address=${form.present_address}&experience=${form.experience_details}&training=${form.training_details}&expected_salary=${form.expected_salary}&acknowledgement=${selected ? 1 :0}&permanent_address=${form.permanent_address}`,imageSet())
            .then(res=>{
                if (res.data.status) {
                    setAlert({
                        status: res.data.status,
                        success: res.data.message,
                    })
                    setLoading(false)
                } else {
                    const full_name= res.data.errors.name ? res.data.errors.name[0] : ''
                    const dob= res.data.errors.dob ? res.data.errors.dob[0] : ''
                    const father_name= res.data.errors.father_name ? res.data.errors.father_name[0] : ''
                    const mother_name= res.data.errors.mother_name ? res.data.errors.mother_name[0] : ''
                    const gender= res.data.errors.gender ? res.data.errors.gender[0] : ''
                    const religion= res.data.errors.religion ? res.data.errors.religion[0] : ''
                    const mobile=res.data.errors.mobile ? res.data.errors.mobile[0] : ''
                    const email=res.data.errors.email ? res.data.errors.email[0] : ''
                    const nid=res.data.errors.nid ? res.data.errors.nid[0] : ''
                    const age = res.data.errors.age ? res.data.errors.age[0] : ''
                    const expected_salary = res.data.errors.expected_salary ? res.data.errors.expected_salary[0] : ''
                    const present_address = res.data.errors.present_address ? res.data.errors.present_address[0] : ''
                    const alternative_mobile = res.data.errors.alternative_mobile ? res.data.errors.alternative_mobile[0] : ''
                    const active_mobile = res.data.errors.active_mobile ? res.data.errors.active_mobile[0] : ''
                    setAlert({
                        status: true,
                        error: 'The given data was invalid.',
                        input_error: {
                            full_name,
                            dob,
                            father_name,
                            mother_name,
                            age,
                            gender,
                            religion,
                            mobile,
                            email,
                            nid,
                            expected_salary,
                            alternative_mobile,
                            active_mobile,
                            present_address
                        }
                    })
                    setLoading(false)
                }
            }).catch(error => {
                console.log(error);
            }) 
        }
    }
    const closeSuccessPopup = e => {
        setAlert({
            success:'',
            error: '',
            status:'',
        })
        setForm({
            full_name: '',
            mobile: '',
            dob: '',
            age: '',
            email: '',
            father_name: '',
            mother_name: '',
            nid: '',
            gender: '',
            religion: '',
            marital_status: '',
            alt_mobile:'',
            active_mobile:'',
            present_address:'',
            permanent_address:'',
            experience_details:'',
            training_details:'',
            expected_salary: '',
            photo:'',
        })
    }
    const closePopup = e => {
        setAlert({
            ...alert,
            success:'',
            error: '',
            status:'',
        })
    }
    const imageSet = e => {
        if (form.photo) {
            const fd = new FormData();
            fd.append('photo', form.photo, form.photo.name);
            return fd
        } else {
            return {}
        }
    }
    return (
        <header className='make_money_header'>
            {loading && <SpinLoader />}
            {alert.status && alert.success && <PopUp close={closeSuccessPopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
            <div className='make_money_header_body'>
            <div className='col-12 d-flex flex-wrap header_input  p-0'>
         <div className="col-12 col-lg-4  p-0">
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="full_name" className=' table_inputs_heading'>Full name:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="full_name" placeholder='Full Name' required onChange={handlechange} value={form.full_name}/>
                        {alert?.input_error?.full_name && (
                            <small className="text-danger">
                                {alert?.input_error?.full_name}
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="dob" className=' table_inputs_heading'>Date of birth:</label>
                        <input type="date" className="form-control uparzon-input-lg" id="dob" placeholder='Age in number' required onChange={handlechange} value={form.dob}/>
                        {alert?.input_error?.dob && (
                            <small className="text-danger">
                                {alert?.input_error?.dob}
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="age" className=' table_inputs_heading'>Age:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="age" placeholder='Age in number' required onChange={handlechange} value={form.age}/>
                        {alert?.input_error?.age && (
                            <small className="text-danger">
                                {alert?.input_error?.age}
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="father_name" className=' table_inputs_heading'>Father's name:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name"  placeholder='Fathers Name'  required onChange={handlechange} value={form.father_name}/>
                        {alert?.input_error?.father_name && (
                            <small className="text-danger">
                                {alert?.input_error?.father_name}
                            </small>
                        )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name" className=' table_inputs_heading'>Mother's name:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name"  placeholder='Mothers Name' required onChange={handlechange} value={form.mother_name}/>
                        {alert?.input_error?.mother_name && (
                            <small className="text-danger">
                                {alert?.input_error?.mother_name}
                            </small>
                        )}
                    </div>
                </div>
            </form>
            </div>
            <div className={`col-lg-8 col-12`}>
                <div className={` col-12 d-flex flex-wrap p-0`}>
                    <div className={`${props.no_upload_image ? "col-lg-12" : 'col-lg-8'} p-0`}>
                    <form className="needs-validation" noValidate>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="mobile" className=' table_inputs_heading'>Mobile No:</label>
                            <input type="text" className="form-control uparzon-input-lg" id="mobile"  placeholder='+88'  required onChange={handlechange} value={form.mobile} />
                        {alert?.input_error?.mobile && (
                            <small className="text-danger">
                                {alert?.input_error?.mobile}
                            </small>
                        )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="alt_mobile" className=' table_inputs_heading'>Alternative Mobile No:</label>
                            <input type="text" className="form-control uparzon-input-lg" id="alt_mobile"  placeholder='+88'  required onChange={handlechange} value={form.alt_mobile} />
                            {alert?.input_error?.alternative_mobile && (
                            <small className="text-danger">
                                {alert?.input_error?.alternative_mobile}
                            </small>
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-12 mb-3">
                        <label htmlFor="email" className=' table_inputs_heading'>Email:</label>
                            <input type="text" className="form-control uparzon-input-lg" id="email" placeholder='Email' required onChange={handlechange} value={form.email} />
                            {alert?.input_error?.email && (
                            <small className="text-danger">
                                {alert?.input_error?.email}
                            </small>
                        )}
                        </div>
                    </div>
                    </form>
                    </div>
                    <div className={`${props.no_upload_image ? 'd-none' : 'd-flex'} col-lg-4  align-items-center align-items-md-start justify-content-center flex-column `}>        
                        <input type="file" className="file-input" id="photo" required onChange={imageEvent}/>
                            {
                            form.photo !== '' ?
                            <div className="header_input_photo_section">
                                <div className="photo_section">
                                    {form.photo !== '' ? <img src={URL.createObjectURL(form.photo)} alt="" /> : <img src={form.photo} alt="" />}
                                </div>
                                <div className="w-100 text-center">
                                    <span className='another_photo_label' onClick={()=>setForm({
                                        ...form,photo:''
                                    })}>Remove photo</span>
                                </div>
                                </div>
                            :<label htmlFor="photo" className=' table_inputs_heading'>
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
                        </label>} 
                    </div>
                </div>
                <div className="col-12 p-0">
                <div className="form-row">
                    <div className="col-12 mb-3 ">
                    <div className="form-group">
                                    
                    <label htmlFor="nid" className=' table_inputs_heading'>NID:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="nid"  required onChange={handlechange} value={form.nid}/>
                        {alert?.input_error?.nid && (
                            <small className="text-danger">
                                {alert?.input_error?.nid}
                            </small>
                        )}
                    </div>
                    </div>
                </div>
                
                </div>
                
                </div>
        <div className="col-12 p-0">
        <div className="form-row p-0">
                <div className="col-lg-4 mb-3 p-0">
                    <label htmlFor="active_mobile" className=' table_inputs_heading'>Your Active Mobile No:</label>
                    <input type="text" className="form-control uparzon-input-lg" id="active_mobile"  required onChange={handlechange} value={form.active_mobile}/>
                    {alert?.input_error?.active_mobile && (
                        <small className="text-danger">
                            {alert?.input_error?.active_mobile}
                        </small>
                    )}
                </div>
                <div className="col-lg-4 mb-3">
                <label htmlFor="religion" className=' table_inputs_heading'>Religion:</label>
                <select className="custom-select uparzon-input-lg" id="religion" required onChange={handlechange} value={form.religion}>
                    <option selected value=''>Choose religion</option>
                    <option value='islam'>Islam</option>
                    <option value='hindu'>Hindu</option>
                    <option value='other'>Other</option>
                </select>
                {alert?.input_error?.religion && (
                    <small className="text-danger">
                        {alert?.input_error?.religion}
                    </small>
                )}
                </div>
                <div className="col-lg-4 mb-3">
                <label htmlFor="gender" className=' table_inputs_heading'>Gender:</label>
                <select className="custom-select uparzon-input-lg" id="gender" required onChange={handlechange} value={form.gender}>
                    <option selected value=''>Select one</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </select>
                {alert?.input_error?.gender && (
                    <small className="text-danger">
                        {alert?.input_error?.gender}
                    </small>
                )}
                </div>
                </div>
        </div>        
        <div className="col-12 p-0">
                <div className="form-row">
                <div className="col-12 mb-3 ">
                <div className="form-group">
                        <label htmlFor="present_address" className=' table_inputs_heading'>Present Address:</label>
                        <textarea className="form-control" id="present_address" rows={3}  onChange={handlechange} value={form.present_address}/>
                        {alert?.input_error?.present_address && (
                            <small className="text-danger">
                                {alert?.input_error?.present_address}
                            </small>
                        )}
                    </div>
                    </div>
                    </div>
                <div className="form-row">
                        <div className="col-12 mb-3">
                        <div className="form-group">
                            <label htmlFor="permanent_address" className=' table_inputs_heading'>Permanent Address:</label>
                            <textarea className="form-control" id="permanent_address" rows={3}  onChange={handlechange} value={form.permanent_address}/>
                        </div>
                        </div>
                    </div>
        </div>        
        </div>
        <div className="">
        <div className="form-row">
            <div className="col-lg-6">
                <div className="form-group">
                    <label htmlFor="experience_details" className=' table_inputs_heading'>Experience (If any):</label>
                    <textarea className="form-control" id="experience_details" rows={3} onChange={handlechange} value={form.experience_details} />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label htmlFor="training_details" className=' table_inputs_heading'>Training (If any):</label>
                    <textarea className="form-control" id="training_details" rows={3} onChange={handlechange} value={form.training_details} />
                </div>
                </div>
                <div className="col-12 p-0">
                <div className="form-row">
                    <div className="col-12 col-lg-5 mb-3 ">
                    <div className="form-group">
                                    
                    <label htmlFor="expected_salary" className=' table_inputs_heading'>Expected Salary:</label>
                        <input type="text" className="form-control uparzon-input-lg" id="expected_salary"  required onChange={handlechange} value={form.expected_salary}/>
                        {alert?.input_error?.expected_salary && (
                            <small className="text-danger">
                                {alert?.input_error?.expected_salary}
                            </small>
                        )}
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
                </div> 
                <div className="text-center">
                    <div className="col-lg-6 m-auto">
                    <AgreementRadio
                        selected={selected}
                        setSelected={setSelected}
                    />
                        <small>
                            You submit your info here for that you want to do some good deeds both for you and for human.
                            Every good deed credited your point and after 10 successful good deeds,
                            you will be got honorarium and gift from emedilife. So, thank you so much for being with emedilife.
                        </small>
                    </div>
                </div>
                <SubmitButton click={register}/>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeMoneyHeader)
