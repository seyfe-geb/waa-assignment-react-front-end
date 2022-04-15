import React, {useState} from 'react';
import './Dashboard.css';
import Posts from "../../containers/Posts/Posts";
import PostDetails from "../../components/PostDetails/PostDetails";
import NewPost from "../../components/NewPost/NewPost";
import {SelectedId} from "../../store/SelectedId";

const Dashboard = () => {

    const [selectedState, setSelectedState] = useState(0);

    const [fetchFlag, setFetchFlag] = useState(true);

    // const [flag, setFlag] = useState(false);

    // const [productState, setProductState] = useState({
    //     name:"",
    //     price:""
    // });

    const setSelectedId = (id) => {
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
            <SelectedId.Provider value={setSelectedId}>
                <div className="Post">
                    <Posts fetchFlag={fetchFlag}/>
                </div>

                <div>
                    <PostDetails id={selectedState} changeFetchFlag={changeFetchFlag}/>
                </div>

                <div>
                    <NewPost changeFetchFlag={changeFetchFlag}/>
                </div>
            </SelectedId.Provider>
        </div>
    );
};

export default Dashboard;