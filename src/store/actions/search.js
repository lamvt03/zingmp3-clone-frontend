import * as apis from '../../apis'
import actionTypes from './actionTypes'

export const search = (keyword) => async (dispatch) => {
    try {
        const resp = await apis.apiSearch(keyword)
        if(resp.data.err === 0){
            dispatch({
                type: actionTypes.SEARCH,
                data: resp.data.data
            })
        }
        else{
            dispatch({
                type: actionTypes.SEARCH,
                data: null
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.SEARCH,
            data: null
        })
    }
}