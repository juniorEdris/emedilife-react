import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PopUp } from '../../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../../PrimarySections/SectionUtils/SpinLoader'
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links'
import AgreementRadio from './SubComponents/AgreementRadio'
import EducationQ from './SubComponents/EducationQ'
import ExperienceArea from './SubComponents/ExperienceArea'
import HeadInputs from './SubComponents/HeadInputs'
import PharmaciesLocation from './SubComponents/PharmaciesLocation'
import SalaryInput from './SubComponents/SalaryInput'
import SubmitButton from './SubComponents/SubmitButton'
import TableRowsTwo from './SubComponents/TableRowsTwo'

const PartTimeForm = (props) => {
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
            expected_salary:''
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
        if (form.name === '' || form.mobile === '' || form.dob === '' ||  form.email === '' || form.father_name === '' || form.nid === '' || form.gender === '' || form.experience === '' || form.training === '' || form.mother_name === '' || form.present_address === '' || form.religion === '' || form.expected_salary==='') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide all your informations.'
            })
        }else if (!selected) {
            setLoading(false)
            setAlert({
                status: true,
                error: 'select all the information is true...'
            })
            
        } else {
            await API().post(`${ENDPOINTS.EMEDI_CAREER}?name=${form.full_name}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&experience=${form.experience}&training=${form.training}&present_address=${form.present_address}&permanent_address=${form.permanent_address}&acknowledgement=${selected ? 1 : 0}&expected_salary=${form.expected_salary}`)
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
        <div className='part_time_wrapper'>
            {loading && <SpinLoader />}
            {alert.status && alert.success && <PopUp close={closePopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
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
            <SalaryInput form={form} inputEvent={inputEvent}/>
            <AgreementRadio
                selected={selected}
                setSelected={setSelected}
            />
            <SubmitButton click={register}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PartTimeForm)
 