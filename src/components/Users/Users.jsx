import React from 'react';
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: true,
                fullName: 'Dimych',
                status: `I'm a boss'`,
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: false,
                fullName: 'Andrew',
                status: `I'm a boss to'`,
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 3,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: true,
                fullName: 'Sveta',
                status: `I'm pretty'`,
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                }
            },
            {
                id: 4,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: false,
                fullName: 'Sasha',
                status: `Kitty'`,
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                }
            },
            {
                id: 5,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: false,
                fullName: 'Viktor',
                status: `WTF'`,
                location: {
                    city: 'St Peterburg',
                    country: 'Russia'
                }
            },
            {
                id: 6,
                photoUrl: 'https://citaty.info/files/characters/5039.jpg',
                followed: true,
                fullName: 'Valera',
                status: `In search of incredible'`,
                location: {
                    city: 'Sevastopol',
                    country: 'Russia'
                }
            }
        ]);
    }

    return (
        <div>
            {
                props.users.map(user => (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photoUrl} className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {user.followed === true
                                        ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => props.follow(user.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {user.fullName}
                                    </div>
                                    <div>
                                        {user.status}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {user.location.city}
                                    </div>
                                    <div>
                                        {user.location.country}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                )
            }
        </div>
    )
};

export default Users;