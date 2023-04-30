import { axiosCall } from "./axiosService";

export const validateIfscCode = (code) => {
    return axiosCall('get',`https://ifsc.razorpay.com/${code}`,{})
}