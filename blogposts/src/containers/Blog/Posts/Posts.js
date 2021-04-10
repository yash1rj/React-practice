import React, { Component } from 'react';
import axios from '../../../axios';
import './Posts.css';

import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';


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
        this.props.history.push('/posts/' + id);
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong !!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    //<Link key={post.id} to={'/posts/' + post.id}>
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;