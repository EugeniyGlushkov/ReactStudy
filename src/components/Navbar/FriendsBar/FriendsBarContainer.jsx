import React from 'react';
import FriendsBar from "./FriendsBar";
import StoreContext from "../../../StoreContext";

const FriendsBarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    return (
                        <FriendsBar state={state.navbar}/>
                    );
                }
            }
        </StoreContext.Consumer>
    );
};

export default FriendsBarContainer;