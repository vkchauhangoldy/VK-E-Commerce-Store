import axios from 'axios';

const params = {
    headers: {
        Authorization: 'bearer ' + process.env.REACT_APP_STRAPI_KEY
    }
}

export const fetchData = async (path)=>{

    try {
        const res = await axios.get(process.env.REACT_APP_URL + path, params);
        console.log(res)
        return res.data;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const makePaymentRequest = async (path, payload)=>{
    try {
        const res = await axios.post(process.env.REACT_APP_URL + path, payload, params);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
        return error
    }
}
