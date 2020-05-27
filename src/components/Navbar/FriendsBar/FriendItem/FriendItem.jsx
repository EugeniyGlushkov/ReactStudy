import React from 'react';

const FriendItem = (props) => {
    return (
        <div>
            <img src={props.avatarUrl} className={'logo'}/>
            {props.name}
        </div>
    );
};

export default FriendItem;