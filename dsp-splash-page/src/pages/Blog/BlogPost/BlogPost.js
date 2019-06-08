import React from "react";

import "./blogPost.css";

const BlogPost = props => {
    return (
        <div className="blogPostContainer">
            <div className="blogPostHeader">
                <img src={props.featuredImage} alt="author picture" className="blogPostPic" />
                <div className="blogPostTitleWrapper">
                    <div className="blogPostTitle almostBlack-text">{props.title}</div>
                    <div className="blogPostName mediumGrey-text">{props.publishedAt}</div>
                </div>
            </div>

            <div id={props.contentVisibility} className="blogPostText charcoalish-text">{props.content}</div>
            <div className="blogPostText charcoalish-text" onClick={() => props.onClickReadMore()}>{props.summary}</div>

            <div id={props.readMore} className="blogPostFade" onClick={() => props.onClickReadMore()}>
                <span className="blogReadMore">read more</span>
            </div>

            {/* {props.post.map(paragraph => (
                    <div className="blogPostParagraph">{paragraph}</div>
                ))} */}
        </div>
    );
};

export default BlogPost;