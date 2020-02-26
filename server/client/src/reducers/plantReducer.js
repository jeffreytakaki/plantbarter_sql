const plant = (state = [], action) => {
    switch (action.type) {
        case 'GET_PLANT':
            return action.payload.data
    
        default:
            return state
    }
}

export default plant;