import React, {useEffect, useState} from 'react';
import './Posts.css';
import axios from "axios";
import Post from "../../components/Post/Post";
import PostDetails from "../../components/PostDetails/PostDetails";
import {Link} from "react-router-dom";

const Posts = (props) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get("http://localhost:55555/api/v1/posts")
            .then(response => setPosts(response.data))
            .catch(error => console.log("Error fetching posts"));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const postsList = posts.map(post =>{
       return(
           <Link to={`${post.id}`} key={post.id}>
                    <Post
                        pid={post.id}
                        title={post.title}
                        content={post.content}
                        author={post.author}
                        key={post.id}
                    />
        </Link>);
});
    return (
        <div className="Post">
            {postsList}
            <PostDetails />
        </div>
    );
};

export default Posts;