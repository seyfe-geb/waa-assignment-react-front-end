import React, {useState} from 'react';
import './Dashboard.css';
import Posts from "../../containers/Posts/Posts";
import PostDetails from "../../components/PostDetails/PostDetails";
import NewPost from "../../components/NewPost/NewPost";

const Dashboard = () => {

    const [selectedState, setSelectedState] = useState(0);

    const [fetchFlag, setFetchFlag] = useState(true);

    // const [flag, setFlag] = useState(false);

    // const [productState, setProductState] = useState({
    //     name:"",
    //     price:""
    // });

    const setSelected = (id) => {
        setSelectedState(id);
    };

    const changeFetchFlag = () => {
        setFetchFlag(!fetchFlag);
    };

    // const onChange = (event) => {
    //     const updatedProduct = {...productState, [event.target.name]:event.target.value};
    //     setProductState(updatedProduct)
    // };

    return (
        <div>
            <div className="Post">
                <Posts setSelected={setSelected} fetchFlag={fetchFlag}/>
            </div>

            <div>
                <PostDetails id={selectedState} changeFetchFlag={changeFetchFlag}/>
            </div>

            <div>
                <NewPost changeFetchFlag={changeFetchFlag}/>
            </div>
        </div>
    );
};

export default Dashboard;