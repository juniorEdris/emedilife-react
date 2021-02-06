import React from 'react'
import { connect } from 'react-redux'

export const Search = (props) => {
    return (
        <div className='search_input'>
            <form action="">
                <select name="" id="">
                    <option value="">Option</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <input type="text" name="search" id="search"/>
                <button type="submit">
                    <i class="fas fa-search" title='search'></i>
                </button>
            </form>
            <div className='responsive_search'>
                <span className='btn btn-link text-light'>
                    <i class="fas fa-search" title='search'></i>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
