import actionTypes from "./actionTypes";
import * as apis from '../../apis'

export const getHome = () => async (dispatch) => {
    try {
        const respone = await apis.getHome()
        if(respone?.data.err === 0){
            dispatch(
                {
                    type: actionTypes.GET_HOME,
                    homeData: respone.data.data.items
                }
            )

        }else{
            dispatch(
                {
                    type: actionTypes.GET_HOME,
                    homeData: null
                }
            )
        }
    } catch (error) {
        dispatch(
            {
                type: actionTypes.GET_HOME,
                homeData: null
            }
        )
    }
}

