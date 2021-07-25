import React, { useState } from 'react'
import { connect } from 'react-redux'
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
    return (
        <div className='part_time_wrapper'>
            <HeadInputs
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <EducationQ
            title={'Education Qualificaion'}
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <ExperienceArea/> 
            <PharmaciesLocation
            title={'Write Down 05 Pharmacies Located at Your Area'}
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <PharmaciesLocation
            title={'Write Down 05 Hospital/Clinic/Diagnostics Located at Your Area'}
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <TableRowsTwo
            title={'Write Down 02 Referral Personnel Located at Your Area'}
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <SalaryInput />
            <AgreementRadio
                selected={selected}
                setSelected={setSelected}
            />
            <SubmitButton/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PartTimeForm)
 