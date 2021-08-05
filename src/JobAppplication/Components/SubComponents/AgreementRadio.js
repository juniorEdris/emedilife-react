import React from 'react'
import { connect } from 'react-redux'

const AgreementRadio = (props) => {
    return (
        <div className='agreement_radio text-center mb-2 mt-2'>
            <span onClick={()=>props.setSelected(!props.selected)} className={`${props.selected &&'active'} radio`}>I hereby declare that all the information that I already put is true and authentic to the best of my knowledge and belief. If anything found froud at any stage, Emedilife can take legal action against me. By clicking submit button, you must agree with our terms and conditions.</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreementRadio)
