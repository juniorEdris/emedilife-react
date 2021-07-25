import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgreementRadio from './SubComponents/AgreementRadio'
import ExperienceArea from './SubComponents/ExperienceArea'
import SubmitButton from './SubComponents/SubmitButton'
import VolunteerInputs from './SubComponents/VolunteerInputs'

const VoulenteerForm = (props) => {
    const [selected, setSelected] = useState(false);
     
    return (
        <div className='voulenteer_wrapper'>
            <VolunteerInputs/>
            <ExperienceArea/> 
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
