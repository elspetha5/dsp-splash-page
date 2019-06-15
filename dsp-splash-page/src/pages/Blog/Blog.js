import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlantTop from "../../components/SlantTop";

import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {
    state = {
        categories: ["design", "service", "professionals", "virtual-office", "events"]
    }

    render() {
        return (
            <div id="blogPageWrapper">

                <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    <div id="blogCategoryWrapper" className="slateWhite-background">
                        <div id="blogCategoryTitle">
                            <div>topics</div>
                            <Link to="/blog" id="blogHomeButton" className="link" onClick={() => this.trueList()}>blog home</Link>
                        </div>
                        <div id="topicsWrapper">
                            {this.state.categories.map(cat =>
                                <Link to={`/blog?c=${cat}`} className="link blogTopic" onClick={() => this.trueList()}>{cat}</Link>
                            )}
                        </div>
                    </div>

                    <div id="blogPostsWrapper">
                        <div id="dib-recent-posts"></div>
                    </div>


                </div>

            </div>
        )
    };
};

export default Blog;