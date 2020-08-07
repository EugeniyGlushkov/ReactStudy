import React from 'react';
import userPhoto_default from "../../assets/images/user_default.png";
import styles from "./users.module.css";
import * as axios from "axios";

class Users extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items));
    };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page =>
                        <span className={this.props.currentPage === page && styles.selectedPage}
                              onClick={(event) => this.onPageChanged(page)}>{page} </span>)
                    }
                </div>
                {
                    this.props.users.map(user => (
                            <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto_default}
                                         className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {user.followed === true
                                        ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }
}

export default Users;