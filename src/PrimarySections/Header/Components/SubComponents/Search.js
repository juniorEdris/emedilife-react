import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const Search = (props) => {
    return (
        <div className='header__search d-none d-md-block'>
        <div className="header__search_inner">
            <select name="" id="">
                <option value="">Option</option>
                <option value="">hakjsd</option>
                <option value="">sdaufh</option>
                <option value="">asdklf;k</option>
            </select>
            <input
                type='text'
                className='header__searchInput'
                />
            <Link to="#" className='header__searchIcon'>
                <i className=" fas fa-search" title='search'></i>
            </Link>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
