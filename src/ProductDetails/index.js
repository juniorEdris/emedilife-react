import React from 'react'
import { connect } from 'react-redux'
import { useQuery } from '../PrimarySections/Utility'

const Detailsindex = (props) => {
    // get ID from query /productdetails?id=${product.id}`
    const query = useQuery()
    const prodID = query.get('id')
  
    return (
        <div className='product_details_container'>
            <h2>here is the id {prodID}</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Detailsindex)
