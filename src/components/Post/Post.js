import React, {useContext} from 'react';
import './Post.css';
import {SelectedId} from "../../store/SelectedId";

const Post = (props) => {

    const setSelectedId = useContext(SelectedId);

    return (
        <div className="Content" onClick={() => setSelectedId(props.pid)}>
            <p>Id: {props.pid}</p>
            <p>Title: {props.title}</p>
            <p>Content: {props.content}</p>
            <p>Author: {props.author}</p>
        </div>
    );
};

export default Post;