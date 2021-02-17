import React from 'react'
import { Link } from 'react-router-dom'
import { Truncate } from '../Utility'

function Article(props) {
    return (
        <div className='article box-shadow mb-3' key={props.post.id}>
                <div className="article_image">
                    <img src={`./assets/images/article/${props.post.image}`} alt=""/>
                </div>
                <div className="article_post_body">
                    <div className="article_title">
                        <h6>{Truncate(props.post.title,40)}</h6>
                    </div>
                    <div className="article_details">
                        <p>{Truncate(props.post.details,100)}</p>
                    </div>
                    <Link to='/'>Read More</Link>
                </div>
            </div>
    )
}

export default Article
