import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ExperienceArea from '../JobAppplication/Components/SubComponents/ExperienceArea'
import HeadInputs from '../JobAppplication/Components/SubComponents/HeadInputs'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import EducationQ from '../JobAppplication/Components/SubComponents/EducationQ'
import TableRowsTwo from '../JobAppplication/Components/SubComponents/TableRowsTwo'
import './medishebok.css'
import PharmaciesLocation from '../JobAppplication/Components/SubComponents/PharmaciesLocation'
import {toTheTop} from '../PrimarySections/SectionUtils/WindowTop';
import { API, ENDPOINTS } from '../PrimarySections/Utility/API_Links'
import { PopUp } from '../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../PrimarySections/SectionUtils/SpinLoader'
const MediShebok = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
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
            training:'',
        }
    );
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: false,
        success: '',
        error:''
    });
    
    // Send Data to API function
    const register = async e => {
        e.preventDefault()
        setLoading(true)
        if (form.name === '' || form.mobile === '' || form.dob === '' ||  form.email === '' || form.father_name === '' || form.nid === '' || form.gender === '' || form.experience === '' || form.training === '' || form.mother_name === '' || form.present_address === '' || form.religion === '') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide all your informations.'
            })
        } else {
            await API().post(`${ENDPOINTS.EMEDI_SHEBOK}?name=${form.full_name}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&experience=${form.experience}&training=${form.training}&present_address=${form.present_address}&permanent_address=${form.permanent_address}`)
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
            success:'',
            error: '',
            status:'',
        })
    }
    return (
        <div className='medishebok_wrapper mt-4 mb-4'>
            {loading && <SpinLoader />}
            {alert.status && alert.success && <PopUp close={closePopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
            <div className="container-md-fluid">
            <header className="medishebok_wrapper_headlines">
                <h1>Medishebok</h1>
                <p>A paid peer for emedilife! A successful e-volunteering takes a peer card from emedilife and he/she will be paid for his/her assisting emedilife. If you want to work with us please
                register as a medishebok now..</p>    
            </header>
            <main>
                <h5>Register</h5>
            <HeadInputs
                form = {form}
                setForm={setForm}
                inputEvent={inputEvent}
            />
            <EducationQ
            title={'Education Qualificaion'}
            form = {form}
            setForm={setForm}
            inputEvent={inputEvent}
            />
            <ExperienceArea
                form = {form}
                setForm={setForm}
                inputEvent={inputEvent}
            /> 
            <PharmaciesLocation
            title={'Write Down 05 Pharmacies Located at Your Area'}
            form = {form}
            setForm={setForm}
            inputEvent={inputEvent}
            />
            <PharmaciesLocation
            title={'Write Down 05 Hospital/Clinic/Diagnostics Located at Your Area'}
            form = {form}
            setForm={setForm}
            inputEvent={inputEvent}
            />
            <TableRowsTwo
            title={'Write Down 02 Referral Personnel Located at Your Area'}
            form = {form}
            setForm={setForm}
            inputEvent={inputEvent}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(MediShebok)
