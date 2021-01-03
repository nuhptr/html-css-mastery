import React, { Component, Fragment } from 'react'
import Post from '../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'

class BlogPost extends Component {
    state = {
        post: []
    }

    getPostApi = () => {
        axios.get('http://localhost:3004/posts')
            .then((result) => {
                this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        axios.delete('http://localhost:3000/posts/${data}')
            .then((result) => {
            this.getPostApi()
        })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json()
        //         .then(json => {
        //             this.setState({
        //             post: json
        //         })
        //     }))
        this.getPostApi()
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p className="section-title">Blog Post</p>
                    {
                        this.state.post.map(post => {
                            return <Post key={post.id} data={post} remove={ this.handleRemove }/>
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogPost