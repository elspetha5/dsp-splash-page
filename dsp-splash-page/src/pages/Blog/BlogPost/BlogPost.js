import React from "react";
import { Link } from "react-router-dom";

import "./blogPost.css";

const BlogPost = props => {
    return (
        <div className="blogPostContainer">
            <div className="blogPostHeader">
                <img src={props.featuredImage} alt="author" className="blogPostPic" />
                <div className="blogPostTitleWrapper">
                    <div className="blogPostTitle almostBlack-text">{props.title}</div>
                    <div className="blogPostName mediumGrey-text">{props.publishedAt}</div>
                </div>
            </div>

            {props.summary
                ? <Link to={`/blog/post/?p=${props.slug}`} className="link blogPostParagraph charcoalish-text" onClick={() => props.onClick()}>{`${props.summary.replace(/<!-- Made with DropInBlog.com -->/g, "")}...`}</Link>
                : props.content.map((p, i) => (
                    p.includes("http")
                        ? <img src={p} alt="" className="blogPostImage blogPostParagraph" key={i} />
                        : <div className="blogPostParagraph" key={i}>{p}</div>
                ))
            }

            <div id={props.readMore} className="blogPostFade">
                <Link to={`/blog/post/?p=${props.slug}`} className="link blogReadMore" onClick={() => props.onClick()}>read more</Link>
            </div>
        </div>
    );
};

export default BlogPost;