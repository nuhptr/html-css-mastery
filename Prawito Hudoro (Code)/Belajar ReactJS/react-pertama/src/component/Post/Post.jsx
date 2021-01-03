import React, { Component } from 'react'

const Post = (props) => {
    return (
    <div className="post">
        <div className="img-thumb">
            <img src="https://placeimg.com/200/150/tech" alt="" />
        </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.author}</p>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
    </div>
    )
}

export default Post;