import React from "react";

import "./blogPost.css";

const BlogPost = props => {
    return (
        <div className="blogPostContainer">
            <div id="blogPostTopic" onClick={props.onClick}>dsp on {props.topic}</div>

            <div className="blogPostHeader">
                <img src={`${process.env.PUBLIC_URL}/peopleImages/${props.pic}.png`} alt={props.name} className="blogPostPic" />
                <div className="blogPostTitleWrapper">
                    <div className="blogPostTitle almostBlack-text">{props.title}</div>
                    <div className="blogPostName mediumGrey-text">{props.date} by {props.name}</div>
                </div>
            </div>

            <div id={props.full} className="blogPostText charcoalish-text" onClick={() => props.onClickReadMore()}>
                {props.post.map(paragraph => (
                    <div className="blogPostParagraph">{paragraph}</div>
                ))}
            </div>

            <div className="blogPostFade" onClick={() => props.onClickReadMore()}><span className="blogReadMore">read more</span></div>
        </div>
    );
};

export default BlogPost;