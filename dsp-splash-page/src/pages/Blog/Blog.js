import React, { Component } from "react";
import SlantTop from "../../components/SlantTop";
import BlogPost from "./BlogPost";

import posts from "../../JSON/blogPosts.json";
import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {
    state = {
        posts
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div>
                <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    {this.state.posts.slice(0, 5).map(post => (
                        <BlogPost
                            pic={post.pic}
                            title={post.title}
                            name={post.name}
                            date={post.date}
                            post={post.post}
                        />
                    ))}
                </div>

            </div>
        )
    };
};

export default Blog;