import React from 'react';
import { Link } from "react-router-dom";

export const GlobalMessages = props => {
    const message = (props.message) ? props.message : '';
    return <p>{message}</p>
}
