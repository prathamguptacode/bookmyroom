import axios from "axios";

let token=null;

export const setToken=(key)=>{
    token=key
}

const api=axios.create({
    baseURL: 'http://localhost:2100',
    withCredentials: true,
})

api.interceptors.request.use(function (config){
    if(token){
        config.headers.Authorization=`Bearer ${token}`
        return config
    }
    return config
    
},function (error){
    return Promise.reject(error)
})

export default api