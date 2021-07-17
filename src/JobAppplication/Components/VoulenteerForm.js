import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgreementRadio from './SubComponents/AgreementRadio'
import EducationQ from './SubComponents/EducationQ'
import HeadInputs from './SubComponents/HeadInputs'
import SubmitButton from './SubComponents/SubmitButton'

const VoulenteerForm = (props) => {
    const [selected, setSelected] = useState(false);
     
    return (
        <div className='voulenteer_wrapper'>
            <HeadInputs
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            no_upload_image
            />
            <EducationQ
            partTimeInfo = {props.partTimeInfo}
            setPartTimeInfo={props.setPartTimeInfo}
            inputEvent={props.inputEvent}
            />
            <div className="mb-4 mt-4">
                <AgreementRadio
                    selected={selected}
                    setSelected={setSelected}
                />
                <SubmitButton/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(VoulenteerForm)
