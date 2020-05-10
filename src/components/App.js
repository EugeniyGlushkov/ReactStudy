import React from 'react';
import '../styles/App.css';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img className={'logo'}
                     src='https://t2conline.com/wp-content/uploads/2019/03/000707-online-digital-eye-logo-free-logo-maker-02.png'
                     title={'logo'}/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
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
        </div>
    );
};

export default App;