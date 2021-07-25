import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgreementRadio from './SubComponents/AgreementRadio'
import EducationQ from './SubComponents/EducationQ'
import ExperienceArea from './SubComponents/ExperienceArea'
import HeadInputs from './SubComponents/HeadInputs'
import SalaryInput from './SubComponents/SalaryInput'
import SubmitButton from './SubComponents/SubmitButton'
import TableRowsTwo from './SubComponents/TableRowsTwo'

const FullTimeForm = (props) => {
    const [selected, setSelected] = useState(false);
     
    return (
        <div className='full_time_form'>
            <HeadInputs
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
            <EducationQ
            title={'Education Qualification'}
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <ExperienceArea/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(FullTimeForm)
