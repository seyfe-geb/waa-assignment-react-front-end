import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                {/* <img width="300" height="100" src={logo} alt="Logo" /> */}
                <ul>
                    <li><Link to="/posts"> Posts</Link></li>
                    <li><Link to="/create-post"> New Post</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;