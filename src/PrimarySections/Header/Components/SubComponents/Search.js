import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const Search = (props) => {
    return (
        <div className='search_input'>
            <form action="">
                <select name="" id="">
                    <option value="">Option</option>
                    <option value="">hakjsd</option>
                    <option value="">sdaufh</option>
                    <option value="">asdklf;k</option>
                </select>
                <input type="text" name="search" id="search"/>
                <button type="submit">
                    <i className="fas fa-search" title='search'></i>
                </button>
            </form>
            <div className='responsive_search'>
                <Link to='/search'>
                    <span className='btn btn-link text-light'>
                        <i className="fas fa-search" title='search'></i>
                    </span>
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
