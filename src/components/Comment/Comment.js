import React from 'react';
import './Comment.css';

const Comment = React.memo(
    (props) => {
        return (
            <div className="Comment">
                {props.comment}
            </div>
        );
    }
);

export default Comment;