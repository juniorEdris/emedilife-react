import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgreementRadio from './SubComponents/AgreementRadio'
import EducationQ from './SubComponents/EducationQ'
import ExperienceArea from './SubComponents/ExperienceArea'
import HeadInputs from './SubComponents/HeadInputs'
import SalaryInput from './SubComponents/SalaryInput'
import SubmitButton from './SubComponents/SubmitButton'

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
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <ExperienceArea/> 
            <EducationQ
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <EducationQ
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
