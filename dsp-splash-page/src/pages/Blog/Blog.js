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
        expanded: ["", "", "", "", ""]
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        axios.get("https://api.dropinblog.com/v1/json/?b=D6MLNHIM4UXBD2BMPO9W")
        .then(res => {
            console.log(res);

            this.setState({
                posts: res.data.data.posts
            })
            
            console.log("state posts: " + this.state.posts[0].summary)
        })
        .catch(err => {
            console.log(err)
        })
    };

    handleReadMore = (i) => {
        let arr = ["", "", "", "", ""];

        if (this.state.expanded[i] === `blogPostFull${i}`) {
            arr[i] = "blogPostShrink";

            this.setState({
                expanded: arr
            })
        }
        else {
            arr[i] = `blogPostFull${i}`;

            this.setState({
                expanded: arr
            });
        }

    };

    render() {
        return (
            <div>
                {/* <SlantTop
                    color="orange-background"
                    title="dsp.blog"
                />

                <div id="blogContainer">
                    <div id="blogPostContainer">
                        {this.state.posts.slice(0, 4).map((post, i) => (
                            <BlogPost
                                id={post.id}
                                topic={post.topic}
                                pic={post.pic}
                                title={post.title}
                                name={post.name}
                                date={post.date}
                                post={post.post}
                                full={this.state.expanded[i]}
                                onClickReadMore={() => this.handleReadMore(i)}
                            />
                        ))}
                    </div>

                    <div id="blogSocialContainer"></div>
                </div> */}

            </div>
        )
    };
};

export default Blog;