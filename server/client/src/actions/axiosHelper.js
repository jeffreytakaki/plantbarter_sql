const getjwtcookie = () => {
    if(localStorage.plantToken) return localStorage.plantToken;
}

export const config = {
    headers: {
        authorization: `JWT ${getjwtcookie()}`
    }
}


