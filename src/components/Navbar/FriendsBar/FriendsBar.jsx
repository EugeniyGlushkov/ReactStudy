import React from 'react';
import s from './FriendsBar.module.css';
import FriendItem from "./FriendItem/FriendItem";

const FriendsBar = (props) => {
    let friends = props.navbar.friends_bar.map(friend => <FriendItem key={friend.id} avatarUrl={friend.avatarUrl} name={friend.name}/>);
    return (
        <div className={s.friends_container}>
            <h3>Friends</h3>
            <div className={s.friends_items}>
                {friends}
            </div>
        </div>
    );
};

export default FriendsBar;