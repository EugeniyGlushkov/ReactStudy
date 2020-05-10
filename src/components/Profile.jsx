import React from 'react';

const Profile = () => {
    return (
        <div className={'content'}>
            <div className={'main-header'}>
                <img className={'main-header_pict'} src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;