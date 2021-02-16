import React from 'react'
import { connect } from 'react-redux'
import SectionHeadingThree from '../../PrimarySections/SectionUtils/SectionHeadingThree'
import Body from "./SubComponent/ArticleBody";

const HealthArticle = (props) => {
    return (
        <div className='health_article mb-4'>
            <div className="container">
                <SectionHeadingThree textOne={'Health'} textTwo={'Article'}/>
                <Body/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HealthArticle)
