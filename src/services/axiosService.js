import axios from "axios";
export const axiosCall = (method,path,headers,body,auth=false) => {
    let axiosHeaders = headers ? headers : {}
    return axios({
        method:method,
        url:path,
        data:body,
        headers:axiosHeaders
    }).then(response =>{
        return response
    });
}