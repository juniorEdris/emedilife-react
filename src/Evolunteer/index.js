import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toTheTop } from '../PrimarySections/SectionUtils/WindowTop'
import Header from './Components/MakeMoneyHeader'
import './make_money.css'

const Evolunteer = (props) => {
    useEffect(() => {
        toTheTop()

    }, [])
    return (
        <div className='make_money_wrapper'>
            <div className="make_money_header mt-5">
                <h1 className='text-center'> E-volunteer </h1>
            </div>
            <div className="container-md-fluid">
                <div className="make_money_body">
                    <Header/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Evolunteer)
