import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="Content" onClick={props.setSelected}>
            <p>Id: {props.pid}</p>
            <p>Title: {props.title}</p>
            <p>Content: {props.content}</p>
            <p>Author: {props.author}</p>
        </div>
    );
};

export default Post;