import React, { Component } from 'react';
import axios from '../../../axios';
import './Posts.css';

//import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';


class Posts extends Component {
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Yash"
                    }
                })
                this.setState({ posts: updatedPosts });
                //console.log(response);
            })
            .catch(error => {
                //console.log(error);
                this.setState({ error: true });
            });
    }

    postSelectHandler = (id) => {
        this.props.history.push('/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong !!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    //<Link key={post.id} to={'/' + post.id}>
                        <Post
                            key={post.id} 
                            title={post.title}
                            author={post.author}
                            selected={() => this.postSelectHandler(post.id)} />
                    //</Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;