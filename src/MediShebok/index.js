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
const MediShebok = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
    const [partTimeInfo, setPartTimeInfo] = useState(
        {
            full_name: '',
            birth_date: '',
            father_name: '',
            mother_name: '',
            sex: '',
            religion: '',
            mobile:'',
            email:'',
            nid_no:'',
            present_address:'',
            permanent_address:'',
        }
    );
    const partTimeDetailsSet = e => {
        setPartTimeInfo({
            ...partTimeInfo,
            [e.target.id]: e.target.value,
        })
    }
    return (
        <div className='medishebok_wrapper mt-4 mb-4'>
            <div className="container-md-fluid">
            <header className="medishebok_wrapper_headlines">
                <h1>Medishebok</h1>
                <p>A paid peer for emedilife! A successful e-volunteering takes a peer card from emedilife and he/she will be paid for his/her assisting emedilife. If you want to work with us please
                register as a medishebok now..</p>    
            </header>
            <main>
                <h5>Register</h5>
                <HeadInputs
            partTimeInfo = {partTimeInfo}
            setPartTimeInfo={setPartTimeInfo}
            inputEvent={partTimeDetailsSet}
            />
            <EducationQ
            title={'Education Qualificaion'}
            partTimeInfo = {partTimeInfo}
            setPartTimeInfo={setPartTimeInfo}
            inputEvent={partTimeDetailsSet}
            />
            <ExperienceArea/> 
            <PharmaciesLocation
            title={'Write Down 05 Pharmacies Located at Your Area'}
            partTimeInfo = {partTimeInfo}
            setPartTimeInfo={setPartTimeInfo}
            inputEvent={partTimeDetailsSet}
            />
            <PharmaciesLocation
            title={'Write Down 05 Hospital/Clinic/Diagnostics Located at Your Area'}
            partTimeInfo = {partTimeInfo}
            setPartTimeInfo={setPartTimeInfo}
            inputEvent={partTimeDetailsSet}
            />
            <TableRowsTwo
            title={'Write Down 02 Referral Personnel Located at Your Area'}
            partTimeInfo = {partTimeInfo}
            setPartTimeInfo={setPartTimeInfo}
            inputEvent={partTimeDetailsSet}
            />
            <SubmitButton/>
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
