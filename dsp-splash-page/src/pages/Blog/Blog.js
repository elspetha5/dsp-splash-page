import React, { Component } from "react";
import { Link } from "react-router-dom";
import SlantTop from "../../components/SlantTop";
import BlogPost from "./BlogPost";
import axios from "axios";

import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {
    state = {
        categories: [],
        posts: [],
        content: [],
        backButton: "hideBack",
        readMore: ""
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.getBlogCategories();
        this.blogDisplayCheck();
    };

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
            this.blogDisplayCheck();
        };
    };

    blogDisplayCheck = () => {
        const { post, topic, author } = this.props.match.params;

        post ? this.getOneBlogPost(post)
            : topic ? this.getBlogPosts("category", topic)
                : author ? this.getBlogPosts("category", author)
                    : this.getBlogPosts("limit", 5)
    };

    getBlogCategories = () => {
        axios.get(`https://api.dropinblog.com/v1/json/categories/?b=D6MLNHIM4UXBD2BMPO9W`)
            .then(res => {
                const arr = res.data.data;
                const slugArr = [];

                arr.map(category => {
                    const slug = category.slug

                    if (slug === "design" || slug === "service" || slug === "professionals" || slug === "virtual-office" || slug === "events") {
                        slugArr.push(slug);
                    }
                });

                this.setState({
                    categories: slugArr
                });

                console.log(this.state.categories)
            })
            .catch(err => {
                console.log(err);
            })
    };

    getBlogPosts = (para, slug) => {
        axios.get(`https://api.dropinblog.com/v1/json/?b=D6MLNHIM4UXBD2BMPO9W&${para}=${slug}`)
            .then(res => {
                para === "category"
                    ? this.setState({
                        backButton: "showBack",
                        posts: res.data.data.posts,
                        content: [],
                        readMore: ""
                    })
                    : this.setState({
                        backButton: "hideBack",
                        posts: res.data.data.posts,
                        content: [],
                        readMore: ""
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    getOneBlogPost = (slug) => {
        axios.get(`https://api.dropinblog.com/v1/json/post/?b=D6MLNHIM4UXBD2BMPO9W&post=${slug}`)
            .then(res => {
                const arr = [res.data.data.post];

                const content = res.data.data.post.content.replace(/<!-- Made with DropInBlog.com -->/g, "");
                const contentArr = content.split("</p>").map(p => (
                    p.replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/&nbsp;/g, "")
                ));

                const contentClean = contentArr.map(p => {
                    if (p.includes("img")) {
                        const pLength = p.length;
                        const endNum = pLength - 36;
                        const source = p.substring(12, endNum);

                        return source;
                    }

                    return p;
                });

                this.setState({
                    posts: arr,
                    content: contentClean,
                    backButton: "showBack",
                    readMore: "hideReadMore"
                });
            })
            .catch(err => {
                console.log(err)
            });
    };

    render() {
        return (
            <div id="blogPageWrapper">
                <div id="dib-posts"></div>

                <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    <div id="blogCategoryWrapper" className="slateWhite-background">
                        <div id="blogCategoryTitle">topics</div>
                        <div id="topicsWrapper">
                            <Link to="/blog/topic/design" className="link blogTopic">design</Link>
                            <Link to="/blog/topic/service" className="link blogTopic">service</Link>
                            <Link to="/blog/topic/professionals" className="link blogTopic">professionals</Link>
                            <Link to="/blog/topic/virtual-office" className="link blogTopic">virtual office</Link>
                            <Link to="/blog/topic/events" className="link blogTopic">events</Link>
                        </div>
                    </div>

                    <Link to="/blog" id={this.state.backButton} className="backButton"><i className="fas fa-chevron-left"></i> back to blog</Link>

                    <div id="blogPostsWrapper">
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
                                />
                            ))
                            : <div id="blogNoPost">Looks like there aren't any posts for this topic or author. Please use one of the button to go back and try again.</div>
                        }
                    </div>


                    <div id="blogSocialContainer"></div>
                </div>

            </div>
        )
    };
};

export default Blog;