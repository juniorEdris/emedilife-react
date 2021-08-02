import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ExperienceArea from '../JobAppplication/Components/SubComponents/ExperienceArea'
import HeadInputs from '../JobAppplication/Components/SubComponents/HeadInputs'
import SubmitButton from '../JobAppplication/Components/SubComponents/SubmitButton'
import EducationQ from '../JobAppplication/Components/SubComponents/EducationQ'
import TableRowsTwo from '../JobAppplication/Components/SubComponents/TableRowsTwo'
import './medishebok.css'
import PharmaciesLocation from '../JobAppplication/Components/SubComponents/PharmaciesLocation'
import MedicalLocation from '../JobAppplication/Components/SubComponents/HospitalsLocation'
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
            training: '',
            position:'',
        }
    );
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: false,
        success: '',
        error:''
    });
    // Education states
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
    // Pharmecy Location State
    const [PharmalocationOne, setPharmalocationOne] = useState(
        {
            id:'',
            pharmaTypeOne: '',
            pharmaNameOne: '',
            pharmaAddressOne: '',
        }
        );
    const pharmaLocationEventOne = e => {
        setPharmalocationOne({
            ...PharmalocationOne,
            [e.target.id]: e.target.value,
        })
    }
    const [PharmalocationTwo, setPharmalocationTwo] = useState(
        {
            id:'',
            pharmaTypeTwo: '',
            pharmaNameTwo: '',
            pharmaAddressTwo: '',
        }
        );
    const pharmaLocationEventTwo = e => {
        setPharmalocationTwo({
            ...PharmalocationTwo,
            [e.target.id]: e.target.value,
        })
    }
    const [PharmalocationThree, setPharmalocationThree] = useState(
        {
            id:'',
            pharmaTypeThree: '',
            pharmaNameThree: '',
            pharmaAddressThree: '',
        }
        );
    const pharmaLocationEventThree = e => {
        setPharmalocationThree({
            ...PharmalocationThree,
            [e.target.id]: e.target.value,
        })
    }
    const [PharmalocationFour, setPharmalocationFour] = useState(
        {
            id:'',
            pharmaTypeFour: '',
            pharmaNameFour: '',
            pharmaAddressFour: '',
        }
        );
    const pharmaLocationEventFour = e => {
        setPharmalocationFour({
            ...PharmalocationFour,
            [e.target.id]: e.target.value,
        })
    }
    const [PharmalocationFive, setPharmalocationFive] = useState(
        {
            id:'',
            pharmaTypeFive: '',
            pharmaNameFive: '',
            pharmaAddressFive: '',
        }
        );
    const pharmaLocationEventFive = e => {
        setPharmalocationFive({
            ...PharmalocationFive,
            [e.target.id]: e.target.value,
        })
    }
    // Medical Location State
    const [medicallocationOne, setMedicallocationOne] = useState(
        {
            id:'',
            medicalTypeOne: '',
            medicalNameOne: '',
            medicalAddressOne: '',
        }
        );
    const medicalLocationEventOne = e => {
        setMedicallocationOne({
            ...medicallocationOne,
            [e.target.id]: e.target.value,
        })
    }
    const [medicallocationTwo, setMedicallocationTwo] = useState(
        {
            id:'',
            medicalTypeTwo: '',
            medicalNameTwo: '',
            medicalAddressTwo: '',
        }
        );
    const medicalLocationEventTwo = e => {
        setMedicallocationTwo({
            ...medicallocationTwo,
            [e.target.id]: e.target.value,
        })
    }
    const [medicallocationThree, setMedicallocationThree] = useState(
        {
            id:'',
            medicalTypeThree: '',
            medicalNameThree: '',
            medicalAddressThree: '',
        }
        );
    const medicalLocationEventThree = e => {
        setMedicallocationThree({
            ...medicallocationThree,
            [e.target.id]: e.target.value,
        })
    }
    const [medicallocationFour, setMedicallocationFour] = useState(
        {
            id:'',
            medicalTypeFour: '',
            medicalNameFour: '',
            medicalAddressFour: '',
        }
        );
    const medicalLocationEventFour = e => {
        setMedicallocationFour({
            ...medicallocationFour,
            [e.target.id]: e.target.value,
        })
    }
    const [medicallocationFive, setMedicallocationFive] = useState(
        {
            id:'',
            medicalTypeFive: '',
            medicalNameFive: '',
            medicalAddressFive: '',
        }
        );
    const medicalLocationEventFive = e => {
        setMedicallocationFive({
            ...medicallocationFive,
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
        const education_1 = `edu_qualifications[0][type]=${educationOne.type}&edu_qualifications[0][institution]=${educationOne.institute}&edu_qualifications[0][board]=${educationOne.board}&edu_qualifications[0][passing_year]=${educationOne.year}&edu_qualifications[0][result]=${educationOne.result}`
        const education_2 = `edu_qualifications[1][type]=${educationTwo.typeTwo}&edu_qualifications[1][institution]=${educationTwo.instituteTwo}&edu_qualifications[1][board]=${educationTwo.boardTwo}&edu_qualifications[1][passing_year]=${educationTwo.yearTwo}&edu_qualifications[1][result]=${educationTwo.resultTwo}`
        const education_3 = `edu_qualifications[2][type]=${educationThree.typeThree}&edu_qualifications[2][institution]=${educationThree.instituteThree}&edu_qualifications[2][board]=${educationThree.boardThree}&edu_qualifications[2][passing_year]=${educationThree.yearThree}&edu_qualifications[2][result]=${educationThree.resultThree}`
        const education_4 = `edu_qualifications[3][type]=${educationFour.typeFour}&edu_qualifications[3][institution]=${educationFour.instituteFour}&edu_qualifications[3][board]=${educationFour.boardFour}&edu_qualifications[3][passing_year]=${educationFour.yearFour}&edu_qualifications[3][result]=${educationFour.resultFour}`
        
        const pharma_1 = `parmacy_locations[0][type]=${PharmalocationOne.pharmaTypeOne}&parmacy_locations[0][name]=${PharmalocationOne.pharmaNameOne}&parmacy_locations[0][address]=${PharmalocationOne.pharmaAddressOne}`
        const pharma_2 = `parmacy_locations[1][type]=${PharmalocationTwo.pharmaTypeTwo}&parmacy_locations[1][name]=${PharmalocationTwo.pharmaNameTwo}&parmacy_locations[1][address]=${PharmalocationTwo.pharmaAddressTwo}`
        const pharma_3 = `parmacy_locations[2][type]=${PharmalocationThree.pharmaTypeThree}&parmacy_locations[2][name]=${PharmalocationThree.pharmaNameThree}&parmacy_locations[2][address]=${PharmalocationThree.pharmaAddressThree}`
        const pharma_4 = `parmacy_locations[3][type]=${PharmalocationFour.pharmaTypeFour}&parmacy_locations[3][name]=${PharmalocationFour.pharmaNameFour}&parmacy_locations[3][address]=${PharmalocationFour.pharmaAddressFour}`
        const pharma_5 =`parmacy_locations[4][type]=${PharmalocationFive.pharmaTypeFive}&parmacy_locations[4][name]=${PharmalocationFive.pharmaNameFive}&parmacy_locations[4][address]=${PharmalocationFive.pharmaAddressFive}`
        
        const hospital_1 = `hospitals_location[0][type]=${medicallocationOne.medicalTypeOne}&hospitals_location[0][name]=${medicallocationOne.medicalNameOne}&hospitals_location[0][address]=${medicallocationOne.medicalAddressOne}`
        const hospital_2 = `hospitals_location[1][type]=${medicallocationTwo.medicalTypeTwo}&hospitals_location[1][name]=${medicallocationTwo.medicalNameTwo}&hospitals_location[1][address]=${medicallocationTwo.medicalAddressTwo}`
        const hospital_3 = `hospitals_location[2][type]=${medicallocationThree.medicalTypeThree}&hospitals_location[2][name]=${medicallocationThree.medicalNameThree}&hospitals_location[2][address]=${medicallocationThree.medicalAddressThree}`
        const hospital_4 = `hospitals_location[3][type]=${medicallocationFour.medicalTypeFour}&hospitals_location[3][name]=${medicallocationFour.medicalNameFour}&hospitals_location[3][address]=${medicallocationFour.medicalAddressFour}`
        const hospital_5 = `hospitals_location[4][type]=${medicallocationFive.medicalTypeFive}&hospitals_location[4][name]=${medicallocationFive.medicalNameFive}&hospitals_location[4][address]=${medicallocationFive.medicalAddressFive}`
        
        const referal_1 = `referrals_location[0][name]=${referalOne.referalNameOne}&referrals_location[0][relation]=${referalOne.referalRelationOne}&referrals_location[0][address]=${referalOne.referalAddressOne}&referrals_location[0][phone]=${referalOne.referalPhoneOne}`
        const referal_2 = `referrals_location[1][name]=${referalTwo.referalNameTwo}&referrals_location[1][relation]=${referalTwo.referalRelationTwo}&referrals_location[1][address]=${referalTwo.referalAddressTwo}&referrals_location[1][phone]=${referalTwo.referalPhoneTwo}`
        setLoading(true)
        if (form.name === '' || form.mobile === '' || form.dob === '' ||  form.email === '' || form.father_name === '' || form.nid === '' || form.gender === '' || form.experience === '' || form.training === '' || form.mother_name === '' || form.present_address === '' || form.religion === '') {
            setLoading(false)
            setAlert({
                status: true,
                error: 'Please provide all your informations.'
            })
        } else {
                        
            await API().post(`${ENDPOINTS.EMEDI_SHEBOK}?name=${form.full_name}&dob=${form.dob}&mobile=${form.mobile}&email=${form.email}&father_name=${form.father_name}&mother_name=${form.mother_name}&nid=${form.nid}&gender=${form.gender}&religion=${form.religion}&experience=${form.experience}&training=${form.training}&present_address=${form.present_address}&permanent_address=${form.permanent_address}&${education_1}&${education_2}&${education_3}&${education_4}&${pharma_1}&${pharma_2}&${pharma_3}&${pharma_4}&${pharma_5}&${hospital_1}&${hospital_2}&${hospital_3}&${hospital_4}&${hospital_5}&${referal_1}&${referal_2}`)
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
                position={false}
            />
            <EducationQ
            title={'Education Qualificaion'}
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
            <PharmaciesLocation
            title={'Write Down 05 Pharmacies Located at Your Area'}
            form={{
                PharmalocationOne,
                PharmalocationTwo,
                PharmalocationThree,
                PharmalocationFour,
                PharmalocationFive,
        }}
        setForm={{
            setPharmalocationTwo,
            setPharmalocationOne,
            setPharmalocationThree,
            setPharmalocationFour,
            setPharmalocationFive,
        }}
        inputEvent={{
            pharmaLocationEventOne,
            pharmaLocationEventTwo,
            pharmaLocationEventThree,
            pharmaLocationEventFour,
            pharmaLocationEventFive,
        }}
            />
        <MedicalLocation
            title={'Write Down 05 Hospital/Clinic/Diagnostics Located at Your Area'}
            form={{
                medicallocationOne,
                medicallocationTwo,
                medicallocationThree,
                medicallocationFour,
                medicallocationFive,
        }}
        setForm={{
            setMedicallocationTwo,
            setMedicallocationOne,
            setMedicallocationThree,
            setMedicallocationFour,
            setMedicallocationFive,
        }}
        inputEvent={{
            medicalLocationEventOne,
            medicalLocationEventTwo,
            medicalLocationEventThree,
            medicalLocationEventFour,
            medicalLocationEventFive,
        }}
            />
            <TableRowsTwo
            title={'Write Down 02 Referral Personnel Located at Your Area'}
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
