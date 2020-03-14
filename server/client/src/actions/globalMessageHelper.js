export const handleGlobalMessages = (response, dispatch) => {
    dispatch({type: "SET_GLOBAL_MSG", payload: response})
    setTimeout(() => {
        dispatch({type: "CLEAR_GLOBAL_MSG", payload: {}})
    }, 3000)
}

