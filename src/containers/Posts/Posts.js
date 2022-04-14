import React, {useEffect, useState} from 'react';
import './Posts.css';
import axios from "axios";
import Post from "../../components/Post/Post";

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:55555/api/v1/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.log("Error fetching posts"));
    };

    useEffect(() => {
        fetchPosts();
    }, [props.fetchFlag]);

    const postsList = posts.map(post => <Post
                                                    pid={post.id}
                                                    title={post.title}
                                                    content={post.content}
                                                    author={post.author}
                                                    key={post.id}
                                                    setSelected={() => {props.setSelected(post.id)}}
                                                />);
    return (
        <>
            {postsList}
        </>
    );
};

export default Posts;