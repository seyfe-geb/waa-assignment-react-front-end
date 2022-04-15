import React, {useRef, useState} from 'react';
import './NewPost.css';
import axios from "axios";

const NewPost = (props) => {

    const newPostForm = useRef();

    // const [postState, setPostState] = useState({
    //     title:"",
    //     content:"",
    //     author:""
    // });
    //
    // const onChange = (event) => {
    //     const updatedPost = {...postState, [event.target.name]:event.target.value};
    //     setPostState(updatedPost)
    // };

    const addButtonClicked = (e) => {
        e.preventDefault();
        const form  = newPostForm.current;
        const post = {
            title:form['title'].value,
            content:form['content'].value,
            author:form['author'].value
        };
        axios.post("http://localhost:55555/api/v1/posts", post)
            .then(response => {
                form['title'].value = "";
                form['content'].value = "";
                form['author'].value = "";
                props.changeFetchFlag();
            })
            .catch(error => console.log("Error posting data!"));
    };

    return (
        <div className="NewPost">
            <form ref={newPostForm} onSubmit={addButtonClicked}>
                <h1>Add Post</h1>

                <label>Title</label>
                <input type="text" label={'title'} name={'title'}/>

                <br/><br/>

                <label>Content</label>
                <input type="text" label={'content'} name={'content'}/>

                <br/><br/>

                <label>Author</label>
                <input type="text" label={'author'} name={'author'}/>


                <br/><br/>

                <button>Add Post</button>
            </form>

        </div>
    );
};

export default NewPost;