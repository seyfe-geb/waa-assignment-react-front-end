import React, {useEffect, useState} from 'react';
import './PostDetails.css';
import axios from "axios";
import Comment from "../Comment/Comment";

const PostDetails = (props) => {


    const [postDetail, setPostDetail] = useState({});


    useEffect(() => {
        axios.get("http://localhost:55555/api/v1/posts/" + props.id)
            .then(response => setPostDetail(response.data))
            .catch(error => console.log("Error fetchinng data!"));
    }, [props.id]);


    const deleteButtonClicked = () => {
        axios.delete("http://localhost:55555/api/v1/posts/" + props.id)
            .then(response => {props.changeFetchFlag();})
            .catch(error => console.log(error.message));
    };

    let postDetailDisplay = null;
    if(props.id != 0){
        postDetailDisplay =
            <div className="PostDetail">
                <div>
                    Post Detail
                </div>
                <h1>{postDetail.title}</h1>
                <div>
                    Comments
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