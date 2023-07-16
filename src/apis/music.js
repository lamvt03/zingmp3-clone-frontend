import axios from "../axios";

export const apiGetSong = (sid) => new Promise(async(resolve, reject) => {
    try{
        const respone = await axios({
            url: '/song',
            method: 'get',
            params: { id: sid }
        })      
        resolve(respone) 
    }catch(error){
        reject(error)
    }
}) 

export const apiGetDetailSong = (sid) => new Promise(async(resolve, reject) => {
    try{
        const respone = await axios({
            url: '/infosong',
            method: 'get',
            params: { id: sid }
        })      
        resolve(respone) 
    }catch(error){
        reject(error)
    }
}) 

export const apiGetDetailPlaylist = (pid) => new Promise(async(resolve, reject) => {
    try{
        const respone = await axios({
            url: '/detailplaylist',
            method: 'get',
            params: { id: pid }
        })      
        resolve(respone) 
    }catch(error){
        reject(error)
    }
}) 