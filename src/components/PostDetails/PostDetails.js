import React, {useEffect, useState} from 'react';
import './PostDetails.css';
import axios from "axios";
import Comment from "../Comment/Comment";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";

const PostDetails = (props) => {


    const [postDetail, setPostDetail] = useState({});
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (params.id) {
            axios.get("http://localhost:55555/api/v1/posts/" + params.id)
                .then(response => setPostDetail(response.data))
                .catch(error => console.log("Error fetchinng data!"));
        }
    }, [params.id]);


    const deleteButtonClicked = () => {
        axios.delete("http://localhost:55555/api/v1/posts/" + params.id)
            .then(response => {navigate("/")})
            .catch(error => console.log(error.message));
    };

    let postDetailDisplay = null;
    if(params.id){
        postDetailDisplay =
            <div className="PostDetail">
                <div>
                    Post Detail
                </div>
                <h1>{postDetail.title}</h1>
                <div style={{textAlign:"left"}}>
                    &nbsp;&nbsp; Comments <br/>
                    {postDetail.comments != null?
                        postDetail.comments.map(comment => <Comment comment={comment.name} key={comment.id}/>)
                        : null}

                    <br/><br/>

                    <button onClick={() => {deleteButtonClicked()}}> Delete Post </button>
                </div>
            </div>
    }


    return (
        <>
            {postDetailDisplay}
        </>
    );
};

export default PostDetails;