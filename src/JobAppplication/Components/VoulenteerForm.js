import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PopUp } from '../../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../../PrimarySections/SectionUtils/SpinLoader'
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links'
import AgreementRadio from './SubComponents/AgreementRadio'
import ExperienceArea from './SubComponents/ExperienceArea'
import SubmitButton from './SubComponents/SubmitButton'
import VolunteerInputs from './SubComponents/VolunteerInputs'

const VoulenteerForm = (props) => {
    const [selected, setSelected] = useState(false);
    const [form, setForm] = useState(
        {
            full_name: '',
            dob: '',
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
            expected_salary:'',
            present_status: '',
            age: '',
            position:'',
        }
    );
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: false,
        success: '',
        error:'',
        input_error: {
            full_name: '',
            dob: '',
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
            photo:''
        }
    });
    
    // Send Data to API function
    const register = async e => {
        e.preventDefault()
        setLoading(true)
        if (!selected) {
            setLoading(false)
            setAlert({
                status: true,
                error: 'select all the information is true...'
            })
            
        } else {
            await API().post(`${ENDPOINTS.EMEDI_CAREER}?name=${form.full_name}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&experience=${form.experience}&training=${form.training}&present_address=${form.present_address}&permanent_address=${form.permanent_address}&acknowledgement=${selected ? 1 : 0}&expected_salary=${form.expected_salary}&position=${form.position}&job_type=${'volunteer'}`)
                .then(res => {
                if (res.data.status) {
                    setAlert({
                        status: res.data.status,
                        success: res.data.message,
                    })
                    setLoading(false)
                } else {
                    setAlert({
                        status: true,
                        error:res.data.message,
                    })
                    setLoading(false)
                }
            }).catch(error => {
                console.log(error);
                const full_name=  error.response.data.errors.name ? error.response.data.errors.name[0] : ''
                const dob=  error.response.data.errors.dob ? error.response.data.errors.dob[0] : ''
                const father_name=  error.response.data.errors.father_name ? error.response.data.errors.father_name[0] : ''
                const mother_name=  error.response.data.errors.mother_name ? error.response.data.errors.mother_name[0] : ''
                const mobile= error.response.data.errors.mobile ? error.response.data.errors.mobile[0] : ''
                const email= error.response.data.errors.email ? error.response.data.errors.email[0] : ''
                const nid= error.response.data.errors.nid ? error.response.data.errors.nid[0] : ''
                setAlert({
                    status: true,
                    error: error.response.data.message,
                    input_error: {
                        full_name,
                        dob,
                        father_name,
                        mother_name,
                        mobile,
                        email,
                        nid
                    }
                })
                setLoading(false)
            }) 
        }
    }
    const inputEvent = e => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
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
    const closeSuccessPopup = e => {
        setAlert({
            success:'',
            error: '',
            status:'',
        })
        setForm({
            full_name: '',
            dob: '',
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
            expected_salary:'',
            present_status: '',
            age: '',
            position:'',
        })
        setSelected(false)
    }
    return (
        <div className='voulenteer_wrapper'>
            {loading && <SpinLoader />}
            {alert.status && alert.success && <PopUp close={closeSuccessPopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
            <VolunteerInputs
                form = {form}
                setForm={setForm}
                inputEvent={inputEvent}
                error={alert.input_error}
            />
            <ExperienceArea
                form = {form}
                setForm={setForm}
                inputEvent={inputEvent}
            />
            <div className="mb-4 mt-4">
                <AgreementRadio
                    selected={selected}
                    setSelected={setSelected}
                />
                <SubmitButton click={register}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VoulenteerForm)
