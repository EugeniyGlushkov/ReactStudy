import React from 'react';
import styles from "./users.module.css";
import userPhoto_default from "../../assets/images/user_default.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(page =>
                    <span key={page}
                          className={props.currentPage === page && styles.selectedPage}
                          onClick={(event) => props.onPageChanged(page)}>{page} </span>)
                }
            </div>
            {
                props.users.map(user => (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto_default}
                                         className={styles.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed === true
                                        ? <button
                                            disabled={props.isFollowingInProgress.some(userId => userId === user.id)}
                                            onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button
                                            disabled={props.isFollowingInProgress.some(userId => userId === user.id)}
                                            onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'user.location.city'}
                                    </div>
                                    <div>
                                        {'user.location.country'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default Users;

