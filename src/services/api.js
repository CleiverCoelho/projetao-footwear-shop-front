import axios from "axios";

function signIn(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);
    return promise;
};

function signUp(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, body);
    return promise;
};

function createConfig(token){
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
}
}

const api = {
    signIn,
    signUp
};

export default api;