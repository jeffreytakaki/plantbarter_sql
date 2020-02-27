const getjwtcookie = () => {
    if(localStorage.plantToken) return localStorage.plantToken;
}

export let config = {
    headers: {
        authorization: `JWT ${getjwtcookie()}`
    }
}


