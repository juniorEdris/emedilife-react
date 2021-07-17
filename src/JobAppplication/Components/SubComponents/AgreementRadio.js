import React from 'react'
import { connect } from 'react-redux'

const AgreementRadio = (props) => {
    return (
        <div className='agreement_radio text-center mb-2 mt-2'>
            <span onClick={()=>props.setSelected(!props.selected)} className={`${props.selected &&'active'} radio`}>I hereby declare that all the information that I already put is true and ......</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreementRadio)
