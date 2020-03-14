import React from 'react';
import { Link } from "react-router-dom";

export const GlobalMessages = props => {
    const message = (props.message) ? props.message : '';
    const setClass = (props.message) ? 'show-message' : 'hide-message';

    return (
        <div id="global-msg-container" className={setClass}>
            {message}
        </div>
    )

}
