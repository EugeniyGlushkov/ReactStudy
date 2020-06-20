import React from 'react';
import FriendsBar from "./FriendsBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    };
};

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar);

export default FriendsBarContainer;