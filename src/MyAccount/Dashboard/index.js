import React from 'react'
import { connect } from 'react-redux'

const Dashboard = (props) => {
    return (
        <div>
            <h3 className='text-danger'>Dashboard</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
