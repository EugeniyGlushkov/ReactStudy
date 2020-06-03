import React from 'react';
import {Route} from "react-router-dom";
import '../styles/App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile state={props.state.profilePage}
                                              addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           state={props.state.messagesPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/Settings'} component={Settings}/>
            </div>
        </div>
    );
};

export default App;