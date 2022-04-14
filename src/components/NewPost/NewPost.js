import React, {useState} from 'react';
import './NewPost.css';
import axios from "axios";

const NewPost = (props) => {

    const [postState, setPostState] = useState({
        title:"",
        content:"",
        author:""
    });

    const onChange = (event) => {
        const updatedPost = {...postState, [event.target.name]:event.target.value};
        setPostState(updatedPost)
    };

    const addButtonClicked = () => {
        axios.post("http://localhost:55555/api/v1/posts", postState)
            .then(response => {
                setPostState({title:"", content: "", author:""});
                props.changeFetchFlag();
            })
            .catch(error => console.log("Error posting data!"));
    };

    return (
        <div className="NewPost">
            <h1>Add Post</h1>

            <label>Title</label>
            <input type="text" label={'title'} name={'title'} onChange={onChange} value={postState.title}/>

            <br/><br/>

            <label>Content</label>
            <input type="text" label={'content'} name={'content'} onChange={onChange} value={postState.content}/>

            <br/><br/>

            <label>Author</label>
            <input type="text" label={'author'} name={'author'} onChange={onChange} value={postState.author}/>


            <br/><br/>

            <button onClick={addButtonClicked}>Add Post</button>
        </div>
    );
};

export default NewPost;