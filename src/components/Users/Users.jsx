import React from 'react';
import styles from "./users.module.css";
import userPhoto_default from "../../assets/images/user_default.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '815a15e6-bfa6-4a5c-b2c2-6e7df308efd2'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(user.id);
                                                    }
                                                });
                                            }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '815a15e6-bfa6-4a5c-b2c2-6e7df308efd2'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id);
                                                    }
                                                });

                                        }}>Follow</button>}
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

