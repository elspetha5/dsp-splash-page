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
        content: [],
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
                console.log(contentClean);

                this.setState({
                    posts: arr,
                    content: contentClean,
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
                                content={this.state.content}
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