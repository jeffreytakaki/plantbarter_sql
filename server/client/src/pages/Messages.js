import React from 'react';
import { connect } from 'react-redux';


class Messages extends React.Component {
    constructor(props, dispatch) {
        super(props);

    }

    componentWillMount(props) {
       
    }

    
    render() {
    
        return (
           <div className="messages-body">
               <h1>messages page</h1>
           </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToEvents = (dispatch) => {
    return {
        
    };
};

const MessagesConnected = connect(mapStateToProps,mapDispatchToEvents)(Messages)
export default MessagesConnected






