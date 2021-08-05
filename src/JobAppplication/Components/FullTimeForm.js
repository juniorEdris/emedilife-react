import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PopUp } from '../../PrimarySections/SectionUtils/PopUp'
import SpinLoader from '../../PrimarySections/SectionUtils/SpinLoader'
import { API, ENDPOINTS } from '../../PrimarySections/Utility/API_Links'
import AgreementRadio from './SubComponents/AgreementRadio'
import EducationQ from './SubComponents/EducationQ'
import ExperienceArea from './SubComponents/ExperienceArea'
import HeadInputs from './SubComponents/HeadInputs'
import SalaryInput from './SubComponents/SalaryInput'
import SubmitButton from './SubComponents/SubmitButton'
import TableRowsTwo from './SubComponents/TableRowsTwo'

const FullTimeForm = (props) => {
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
            qualification: [],
            position: '',
            photo:'',
        }
    );
        const [loading, setLoading] = useState(false);
        const [alert, setAlert] = useState({
        status: false,
        success: '',
        error:''
    });
    
    const [educationOne, setEducationOne] = useState(
        {
            id:'',
            type: '',
            board: '',
            year: '',
            result: '',
            institute: '',
        }
        );
    const [educationTwo, setEducationTwo] = useState(
        {
            idTwo:'',
            typeTwo: '',
            boardTwo: '',
            yearTwo: '',
            resultTwo: '',
            instituteTwo: '',
        }
        );
    const [educationThree, setEducationThree] = useState(
        {
            idThree:'',
            typeThree: '',
            boardThree: '',
            yearThree: '',
            resultThree: '',
            instituteThree: '',
        }
        );
    const [educationFour, setEducationFour] = useState(
        {
            idFour:'',
            typeFour: '',
            boardFour: '',
            yearFour: '',
            resultFour: '',
            instituteFour: '',
        }
        );
  const educationEventOne = e => {
        setEducationOne({
            ...educationOne,
            [e.target.id]: e.target.value,
        })
    }
  const educationEventTwo = e => {
        setEducationTwo({
            ...educationTwo,
            [e.target.id]: e.target.value,
        })
    }
  const educationEventThree = e => {
        setEducationThree({
            ...educationThree,
            [e.target.id]: e.target.value,
        })
    }
  const educationEventFour = e => {
        setEducationFour({
            ...educationFour,
            [e.target.id]: e.target.value,
        })
    }
        // Referal Info
        const [referalOne, setReferalOne] = useState(
            {
                id:'',
                referalNameOne: '',
                referalRelationOne: '',
                referalAddressOne: '',
                referalPhoneOne: '',
            }
            );
        const ReferalEventOne = e => {
            setReferalOne({
                ...referalOne,
                [e.target.id]: e.target.value,
            })
        }
        const [referalTwo, setReferalTwo] = useState(
            {
                id:'',
                referalNameTwo: '',
                referalRelationTwo: '',
                referalAddressTwo: '',
                referalPhoneTwo: '',
            }
            );
        const ReferalEventTwo = e => {
            setReferalTwo({
                ...referalTwo,
                [e.target.id]: e.target.value,
            })
    }
    // Send Data to API function
    const register = async e => {
        e.preventDefault()
        const education_1 = `edu_qualifications[0][exam_type]=${educationOne.type}&edu_qualifications[0][institution]=${educationOne.institute}&edu_qualifications[0][board]=${educationOne.board}&edu_qualifications[0][passing_year]=${educationOne.year}&edu_qualifications[0][result]=${educationOne.result}`
        const education_2 = `edu_qualifications[1][exam_type]=${educationTwo.typeTwo}&edu_qualifications[1][institution]=${educationTwo.instituteTwo}&edu_qualifications[1][board]=${educationTwo.boardTwo}&edu_qualifications[1][passing_year]=${educationTwo.yearTwo}&edu_qualifications[1][result]=${educationTwo.resultTwo}`
        const education_3 = `edu_qualifications[2][exam_type]=${educationThree.typeThree}&edu_qualifications[2][institution]=${educationThree.instituteThree}&edu_qualifications[2][board]=${educationThree.boardThree}&edu_qualifications[2][passing_year]=${educationThree.yearThree}&edu_qualifications[2][result]=${educationThree.resultThree}`
        const education_4 = `edu_qualifications[3][exam_type]=${educationFour.typeFour}&edu_qualifications[3][institution]=${educationFour.instituteFour}&edu_qualifications[3][board]=${educationFour.boardFour}&edu_qualifications[3][passing_year]=${educationFour.yearFour}&edu_qualifications[3][result]=${educationFour.resultFour}`
                
        const referal_1 = `referrals_location[0][name]=${referalOne.referalNameOne}&referrals_location[0][relation]=${referalOne.referalRelationOne}&referrals_location[0][address]=${referalOne.referalAddressOne}&referrals_location[0][phone]=${referalOne.referalPhoneOne}`
        const referal_2 = `referrals_location[1][name]=${referalTwo.referalNameTwo}&referrals_location[1][relation]=${referalTwo.referalRelationTwo}&referrals_location[1][address]=${referalTwo.referalAddressTwo}&referrals_location[1][phone]=${referalTwo.referalPhoneTwo}`
        let photo
        if (form.photo) {
            const fd = new FormData();
            photo = fd.append('photo', form.photo, form.photo.name);
        }
        setLoading(true)
        if (form.position === '') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide your expecting position.'
            })
        }else if (form.full_name === '') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide your name.'
            })
        }else if ( form.mobile === '') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide your phone number.'
            })
        }else if (!selected) {
            setLoading(false)
            setAlert({
                status: true,
                error: 'select all the information is true...'
            })
            
        } else {
            await API().post(`${ENDPOINTS.EMEDI_CAREER}?name=${form.full_name}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&experience=${form.experience}&training=${form.training}&present_address=${form.present_address}&permanent_address=${form.permanent_address}&acknowledgement=${selected ? 1 : 0}&expected_salary=${form.expected_salary}&${education_1}&${education_2}&${education_3}&${education_4}&${referal_1}&${referal_2}&position=${form.position}&job_type=${'full time'}`,imageSet())
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
    const closePopup = e => {
        setAlert({
            success:'',
            error: '',
            status:'',
        })
    }
    // close success popup and clear all the states
    const closeSuccessPopup = e => {
        setAlert({
            success:'',
            error: '',
            status:'',
        })
        setSelected(false)
        // Form inputs
        setForm(
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
                qualification: [],
                position: '',
                photo:'',
            }
        )
        // education state
        setEducationOne(
                    {
            id:'',
            type: '',
            board: '',
            year: '',
            result: '',
            institute: '',
        }
        )
        setEducationTwo(
                    {
            idTwo:'',
            typeTwo: '',
            boardTwo: '',
            yearTwo: '',
            resultTwo: '',
            instituteTwo: '',
        }
        )
        setEducationThree(
                    {
            idThree:'',
            typeThree: '',
            boardThree: '',
            yearThree: '',
            resultThree: '',
            instituteThree: '',
        }
        )
        setEducationFour(
                    {
            idFour:'',
            typeFour: '',
            boardFour: '',
            yearFour: '',
            resultFour: '',
            instituteFour: '',
        }
        )
        // referal state
        setReferalOne(
            {
                id:'',
                referalNameOne: '',
                referalRelationOne: '',
                referalAddressOne: '',
                referalPhoneOne: '',
            }
        )
        setReferalTwo(
            {
                id:'',
                referalNameTwo: '',
                referalRelationTwo: '',
                referalAddressTwo: '',
                referalPhoneTwo: '',
            }
        )
    }
    return (
        <div className='full_time_form'>
            {loading && <SpinLoader />}
            {alert.status && alert.success && <PopUp close={closeSuccessPopup} response={ alert.success }/>}
            {alert.status && alert.error && <PopUp close={closePopup} response={ alert.error }/>}
            <HeadInputs
                form={form}
                setForm={setForm}
                inputEvent={inputEvent}
                imageEvent={imageEvent}
                position={true}
            />
            <EducationQ
            title={'Education Qualification'}
            form={{
                educationOne,
                educationTwo,
                educationThree,
                educationFour
            }}
            setForm={{
                setEducationOne,
                setEducationTwo,
                setEducationThree,
                setEducationFour
            }}
            inputEvent={{
                educationEventOne,
                educationEventTwo,
                educationEventThree,
                educationEventFour
            }}
            />
            <ExperienceArea
                form = {form}
                setForm={setForm}
                inputEvent={inputEvent}
            />
            <TableRowsTwo
                title={'Write down 02 referral persons of your area'}
                form={{
                    referalOne,    
                    referalTwo,    
                }}
                setForm={{
                    setReferalOne,    
                    setReferalTwo,    
                }}
                inputEvent={{
                    ReferalEventOne,    
                    ReferalEventTwo,    
                }}
            />
            <SalaryInput
                form={form}
                inputEvent={inputEvent}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(FullTimeForm)
