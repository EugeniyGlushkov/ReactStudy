import React from 'react';
import {Route} from "react-router-dom";
import '../styles/App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const App = (props) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'}
                       render={() => <Profile/>}
                />
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer/>}
                />
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/Settings'} component={Settings}/>
                <Route path={'/users'}
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
};

export default App;