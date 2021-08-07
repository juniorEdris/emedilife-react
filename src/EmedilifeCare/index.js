/* eslint-disable no-mixed-operators */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop'
import './care.css'
import {API, ENDPOINTS} from '../PrimarySections/Utility/API_Links';
import PopUp from '../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader'
const EmedilifeCare = (props) => {
    const [form, setForm] = useState({
        name: '',
        mobile: '',
        dob: '',
        age: '',
        email: '',
        father_name: '',
        mother_name: '',
        nid: '',
        gender: '',
        religion: '',
        marital_status:''
    });
    const [alert, setAlert] = useState({
        success:'',
        error: '',
        status:false,
        input_error: {
            full_name: '',
            dob: '',
            age:'',
            father_name: '',
            mother_name: '',
            gender: '',
            religion: '',
            mobile:'',
            email:'',
            nid:'',
            present_address:'',
            permanent_address:'',
            experience:'',
            training: '',
            position: '',
            photo: '',
            marital_status:''
        }
    });
    const [loading, setloading] = useState(false);
    useEffect(() => {
        toTheTop()

    }, [])
    const handlechange = e => {
        setForm({...form,[e.target.id]:e.target.value})
    }
    const register = async e => {
        e.preventDefault()
        setAlert(
            {
                success:'',
                error: '',
                status:false,
                input_error: {
                    full_name: '',
                    dob: '',
                    age:'',
                    father_name: '',
                    mother_name: '',
                    gender: '',
                    religion: '',
                    mobile:'',
                    email:'',
                    nid:'',
                    present_address:'',
                    permanent_address:'',
                    experience:'',
                    training: '',
                    position: '',
                    photo: '',
                    marital_status:''
                }
            }
        )
        setloading(true)
            await API().post(`${ENDPOINTS.EMEDICARE}?name=${form.name}&age=${form.age}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&marital_status=${form.marital_status}`)
            .then(res=>{
                console.log(res.data);
                if (res.data.status) {
                    setAlert({
                        status: res.data.status,
                        success: res.data.message,
                    })
                    setloading(false)
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
                const marital_status = res.data.errors.marital_status ? res.data.errors.marital_status[0] : ''

                setAlert({
                    status: true,
                    error: "The given data was invalid.",
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
                        marital_status,
                    }
                })
                    setloading(false)
                }
            }).catch(error => {
                console.log(error);
            }) 
        
    }
    const closeSuccessPopup = e => {
        setAlert({
            success:'',
            error: '',
            status: '',
            input_error:{}
        })
        setForm({
            name: '',
            mobile: '',
            dob: '',
            age: '',
            email: '',
            father_name: '',
            mother_name: '',
            nid: '',
            gender: '',
            religion: '',
            marital_status:''
        });
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
        <div className="container-md-fluid">
            {loading && <SpinLoader/>}
            {alert.status && alert.success && <PopUp close={closeSuccessPopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
            <div className='emedilife_care_wrapper'>
                <header>
                    <div className="emedilife_care_headlines">
                        <p>
                        Emedilife care is an unique idea for the peoples of Bangladesh where peoples pay minimum but get maximum formula followed. Emedilife is the only body who patronizes peoples
                        participation in health sector especially unemployed personnel to deliver genuine medicines at maximum discount without any delivery charges and serve exclusive medical
                        services at different reputable hospitals and clinics at low cost. If you register at Emedilife Care campaign, weʼll help you to get more exclusive services to color your life.
                        </p>
                    </div>
                    <div className="emedilife_care_register">
                        <span>Register at Emedilife Care___________</span>
                    </div>
                </header>
                <main className=''>
                    <div className="d-flex flex-wrap">
                <div className="col-12 col-lg-4  ">
            <form className="needs-validation" noValidate >
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="name">Full name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="name" placeholder='Full Name' required onChange={handlechange} value={form.name}/>
                    {alert?.input_error?.full_name !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.full_name}
                        </small>
                    )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="dob">Date of birth</label>
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
                    <label htmlFor="father_name">Father's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="father_name" placeholder='Fathers Name' required onChange={handlechange} value={form.father_name}/>
                        {alert?.input_error?.father_name !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.father_name}
                        </small>
                    )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mother_name">Mother's name</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mother_name" placeholder='Mothers Name' required onChange={handlechange} value={form.mother_name}/>
                        {alert?.input_error?.mother_name !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.mother_name}
                        </small>
                    )}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="age">Age</label>
                        <input type="text" className="form-control uparzon-input-lg" id="age" placeholder='Age in number' required onChange={handlechange} value={form.age}/>
                        {alert?.input_error?.age !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.age}
                        </small>
                    )}
                    </div>
                </div>
                
            </form>
            </div>
            <div className="col-12 col-lg-4 ">
            <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="mobile">Mobile No.</label>
                        <input type="text" className="form-control uparzon-input-lg" id="mobile" placeholder='Mobile' required onChange={handlechange} value={form.mobile}/>
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
                        <input type="text" className="form-control uparzon-input-lg" id="email" placeholder='email' required onChange={handlechange} value={form.email}/>
                        {alert?.input_error?.email !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.email}
                        </small>
                    )}
                    </div>
            </div>
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="nid">NID no.</label>
                        <input type="text" className="form-control uparzon-input-lg" id="nid" placeholder='NID no.' required onChange={handlechange} value={form.nid}/>
                        {alert?.input_error?.nid !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.nid}
                        </small>
                    )}
                    </div>
                </div>
                </div>
            <div className="col-12 col-lg-4 ">
                <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="gender">Sex:</label>
                    <select className="custom-select uparzon-input-lg" id="gender" onChange={handlechange} value={form.gender}>
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
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="religion">Religion:</label>
                    <select className="custom-select uparzon-input-lg" id="religion" required onChange={handlechange} value={form.religion}>
                        <option selected value=''>Choose religion</option>
                        <option value='islam'>Islam</option>
                        <option value='hindu'>Hindu</option>
                        <option value='other'>Other</option>
                    </select>
                    {alert?.input_error?.religion !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.religion}
                        </small>
                    )}
                    </div>
                    </div>
                    <div className="form-row">
                    <div className="col-12 mb-3">
                    <label htmlFor="marital_status">Marital Status:</label>
                    <select className="custom-select uparzon-input-lg" id="marital_status" required  onChange={handlechange} value={form.marital_status}>
                        <option selected value=''>Marital Status</option>
                        <option value='married'>Married</option>
                        <option value='not_married'>Not married</option>
                    </select>
                    {alert?.input_error?.marital_status !== '' && (
                        <small className="text-danger">
                            {alert?.input_error?.marital_status}
                        </small>
                    )}
                    </div>
                    </div>
                    </div>
                </div>
                    <SubmitButton click={register}/>
                </main>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmedilifeCare)
