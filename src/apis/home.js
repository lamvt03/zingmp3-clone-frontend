import axios from "../axios";

export const getHome = () => new Promise(async(resolve, reject) => {
    try{
        const respone = await axios({
            url: '/home',
            method: 'get'
        })
        resolve(respone)
    }catch(error){
        reject(error)
    }
}) 