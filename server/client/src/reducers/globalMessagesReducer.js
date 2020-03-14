const globalMsgs = (state = [], action) => {
    switch (action.type) {
        
        case 'SET_GLOBAL_MSG':
            console.log('action.payload', action.payload)
            return [
                action.payload.data.message,
                ...state
            ]

        case 'CLEAR_GLOBAL_MSG':
            // delete messages using FIFO;

            // return [
            //     ...state.splice(0,-1)
            // ]
            // remove last item in array
            if(state.length > 1) return state.slice(0,-1);
            
            // if last item, just send back empty state
            return [];
            

            
        default:
            return state
    }
}

export default globalMsgs;