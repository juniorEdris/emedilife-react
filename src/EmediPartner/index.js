import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import { PopUp } from '../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader'
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop'
import { API , ENDPOINTS} from '../PrimarySections/Utility/API_Links'
import './emedi_pertner.css'

const EmediPartner = (props) => {
    useEffect(() => {
        toTheTop()
        
    }, [])
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
        photo:''
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: false,
        success: '',
        error: '',
        input_error: {
            full_name:'',
            mobile:'',
            dob:'',
            age:'',
            email:'',
            father_name:'',
            nid:'',
            mother_name:'',
            gender:'',
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
    const imageSet = e => {
        if (form.photo) {
            const fd = new FormData();
            fd.append('photo', form.photo, form.photo.name);
            return fd
        } else {
            return {}
        }
    }
    const register = async e => {
        e.preventDefault()
        // set all alerts
        setAlert({
            status: false,
            success: '',
            error: '',
            input_error: {
                full_name:'',
                mobile:'',
                dob:'',
                age:'',
                email:'',
                father_name:'',
                nid:'',
                mother_name:'',
                gender:'',
            }
        })
        setLoading(true)
            await API().post(`${ENDPOINTS.EMEDIPARTNER}?name=${form.name}&age=${form.age}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&marital_status=${form.marital_status}`,imageSet())
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
                    const mobile=res.data.errors.mobile ? res.data.errors.mobile[0] : ''
                    const email=res.data.errors.email ? res.data.errors.email[0] : ''
                    const nid=res.data.errors.nid ? res.data.errors.nid[0] : ''
                    const age = res.data.errors.age ? res.data.errors.age[0] : ''
                   
                    setAlert({
                        status: true,
                        error: 'The given data was invalid.',
                        input_error: {
                            full_name,
                            mobile,
                            dob,
                            age,
                            email,
                            father_name,
                            nid,
                            mother_name,
                            gender,
                        }
                    })
                    setLoading(false)
                }
            }).catch(error => {
                console.log(error);
            }) 
    }
    const closeSuccessPopup = e => {
        setAlert({
            success:'',
            error: '',
            status:'',
        })
        setForm(
            {
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
                photo:''
            }
        )
    }
    const closePopup = e => {
        setAlert({
            ...alert,
            success:'',
            error: '',
            status:'',
        })
    }
    return (
        <div className='emedi_partner_wrapper mt-4 mb-4'>
            {loading && <SpinLoader/>}
            {alert.status && alert.success && <PopUp close={closeSuccessPopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
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
                                <label htmlFor="name">Full name</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="full_name" placeholder='Full Name' required onChange={handlechange} value={form.full_name}/>
                                    {alert?.input_error?.full_name !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.full_name}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="dob">Birth Date</label>
                                    <input type="date" className="form-control uparzon-input-lg" id="dob" required  onChange={handlechange} value={form.dob}/>
                                    {alert?.input_error?.dob !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.dob}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="father_name">Father name</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="father_name" placeholder='Father Name' required  onChange={handlechange} value={form.father_name}/>
                                    {alert?.input_error?.father_name !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.father_name}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="mother_name">Mother name</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="mother_name" placeholder='Mother Name' required  onChange={handlechange} value={form.mother_name}/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="age">Age</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="age" placeholder='age' required  onChange={handlechange} value={form.age}/>
                                    {alert?.input_error?.age !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.age}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                            <div className="col-12 mb-3">
                            <label htmlFor="gender">Sex:</label>
                            <select className="custom-select uparzon-input-lg" id="gender" required  onChange={handlechange} value={form.gender}>
                                <option selected value=''>Choose gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                            {alert?.input_error?.gender !== '' && (
                                <small className="text-danger">
                                    {alert?.input_error?.gender}
                                </small>
                            )}
                            </div>
                            </div>
                        </div>
                        {/* col ends here  */}
                        <div className="col-lg-4 col-12 ">
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="mobile">Mobile No.</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="mobile" placeholder='+88' required  onChange={handlechange} value={form.mobile}/>
                                    {alert?.input_error?.mobile !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.mobile}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control uparzon-input-lg" id="email" required placeholder='email'  onChange={handlechange} value={form.email}/>
                                    {alert?.input_error?.email !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.email}
                                        </small>
                                    )}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                <label htmlFor="nid">NID</label>
                                    <input type="text" className="form-control uparzon-input-lg" id="nid" placeholder='NID no' required  onChange={handlechange} value={form.nid}/>
                                    {alert?.input_error?.nid !== '' && (
                                        <small className="text-danger">
                                            {alert?.input_error?.nid}
                                        </small>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* col ends here */}
                        <div className={`d-flex col-lg-4  align-items-center flex-column `}>        
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
                        :<label htmlFor="photo" className="mt-2">
                        <span className='mb-2 d-block text-center'>Upload photo</span>
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
                            </label>}
                    </div>
                    </div>
                    <div className="mt-2">
                        <SubmitButton click={register}/>
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
