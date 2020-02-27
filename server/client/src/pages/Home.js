import React from 'react';
import Search from '../components/Search';

export default class Home extends React.Component {
    constructor(props, dispatch) {
        super(props);
       
    }

    render() {
        return (
            <div className="home-container">
                <Search />
            </div>
            

        )
    }
}
