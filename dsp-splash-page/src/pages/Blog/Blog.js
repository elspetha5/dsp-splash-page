import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlantTop from "../../components/SlantTop";
import BlogPost from "./BlogPost";
import axios from "axios";

import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {
    state = {
        list: true,
        categories: ["design", "service", "professionals", "virtual-office", "events"],
        posts: [],
        content: [],
        readMore: "",
        onePost: "onePostInvisible",
        postList: "postListVisible"
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.blogDisplayCheck();
    };

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
            this.blogDisplayCheck();
            this.postStatus();
        };
    };

    blogDisplayCheck = () => {
        const { topic, author } = this.props.match.params;

        topic ? this.getBlogPosts("category", topic)
            : author ? this.getBlogPosts("category", author)
                : this.getBlogPosts("limit", 5)
    };

    getBlogPosts = (para, slug) => {
        axios.get(`https://api.dropinblog.com/v1/json/?b=D6MLNHIM4UXBD2BMPO9W&${para}=${slug}`)
            .then(res => {
                this.setState({
                    posts: res.data.data.posts,
                    content: [],
                    readMore: "",
                    list: true
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    trueList = () => {
        this.setState({
            list: true
        });
    };

    falseList = () => {
        this.setState({
            list: false
        });
    };

    postStatus = () => {
        !this.state.list
            ? this.setState({
                onePost: "onePostVisible",
                postList: "postListInvisible"
            })
            : this.setState({
                onePost: "onePostInvisible",
                postList: "postListVisible"
            })
    };

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
                                <Link to={`/blog/topic/${cat}`} className="link blogTopic" onClick={() => this.trueList()}>{cat}</Link>
                            )}
                        </div>
                    </div>

                    <div id="blogPostsWrapper">
                        <div id="dib-posts" className={this.state.onePost}></div>

                        <div className={this.state.postList}>
                            {this.state.posts
                                ? this.state.posts.map((post, i) => (
                                    <BlogPost
                                        key={i}
                                        featuredImage={post.featuredImage}
                                        title={post.title}
                                        publishedAt={post.publishedAt}
                                        summary={post.summary}
                                        content={this.state.content}
                                        readMore={this.state.readMore}
                                        slug={post.slug}
                                        onClick={() => this.falseList()}
                                    />
                                ))
                                : <div id="blogNoPost">Looks like there aren't any posts for this topic or author. Please use one of the button to go back and try again.</div>
                            }
                        </div>
                    </div>


                    <div id="blogSocialContainer"></div>
                </div>

            </div>
        )
    };
};

export default Blog;