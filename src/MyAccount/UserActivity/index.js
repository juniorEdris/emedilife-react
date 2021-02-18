import React from 'react'
import { connect } from 'react-redux'
import UserEntry from './Components/UserEntry'

 const MyAccount = (props) => {
    return (
        <div className='my_account'>
            <UserEntry/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)
