import React from 'react';
import { Link } from 'react-router-dom';
import { renderDiv, Truncate } from '../Utility';

function Article(props) {
  return (
    <div className="article box-shadow mb-3" key={props.post.id}>
      <div className="article_image">
        <img
          // src={`https:${props.post.photo}`}
          src={`./assets/images/article/03.png`}
          alt=""
        />
      </div>
      <div className="article_post_body">
        <div className="article_title">
          <h4>{Truncate(props.post.title, 40)}</h4>
        </div>
        {/* <div className="article_details">
          <p>{Truncate(dummy, 20)}</p>
        </div> */}
        {renderDiv(props.post.details)}
        <Link to={`/single-blog?id=${props.post.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default Article;
