import axios from "../axios";

export const apiSearch = (keyword) => new Promise(async(resolve, reject) => {
    try{
        const respone = await axios({
            url: '/search',
            method: 'get',
            params: { keyword }
        })    
        resolve(respone) 
    }catch(error){
        reject(error)
    }
}) 