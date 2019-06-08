import React, { Component } from "react";
import SlantTop from "../../components/SlantTop";
import BlogPost from "./BlogPost";
import axios from "axios";

// import posts from "../../JSON/blogPosts.json";
import "./css/blog.css";
import "./css/mediaBlog.css";

class Blog extends Component {
    state = {
        posts: [],
        // content: [],
        contentVisibility: "hideContent",
        readMore: ""
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.getRecentBlogPosts();
    };

    getRecentBlogPosts = () => {
        axios.get("https://api.dropinblog.com/v1/json/?b=D6MLNHIM4UXBD2BMPO9W")
            .then(res => {
                this.setState({
                    posts: res.data.data.posts,
                    readMore: ""
                });

                console.log(res);
            })
            .catch(err => {
                console.log(err)
            });
    }

    handleReadMore = (slug) => {
        axios.get(`https://api.dropinblog.com/v1/json/post/?b=D6MLNHIM4UXBD2BMPO9W&post=${slug}`)
            .then(res => {
                console.log(res);
                let arr = [res.data.data.post];

                let content = res.data.data.post.content.replace(/<p>&nbsp;<\/p><!-- Made with DropInBlog.com -->/g, "");
                let contentArr = content.split("<p>&nbsp;</p>");
                console.log("content array: " + contentArr);
                
                let cleanContent = contentArr.map(p => (
                    p.replace(/<p>/g, "").replace(/<\/p>/g, "").replace(/&nbsp;/g, "")
                ));
                console.log("clean conten: " + cleanContent);

                this.setState({
                    posts: arr,
                    contentVisibility: "showContent",
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
                {/* <div id="dib-posts"></div> */}

                <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    <div id="blogPostContainer">
                        {this.state.posts.map(post => (
                            <BlogPost
                                featuredImage={post.featuredImage}
                                title={post.title}
                                publishedAt={post.publishedAt}
                                summary={post.summary}
                                contentVisibility={this.state.contentVisibility}
                                content={post.content}
                                readMore={this.state.readMore}
                                onClickReadMore={() => this.handleReadMore(post.slug)}
                            />
                        ))}
                    </div>

                    <div id="blogSocialContainer"></div>
                </div>

            </div>
        )
    };
};

export default Blog;