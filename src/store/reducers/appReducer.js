import actionTypes from "../actions/actionTypes";

const initState = {
   bannner: [],
   hEditorTheme: {},
   hEditorTheme2: {},
   newRelease: {},
   weekChart: {},
   hZC: {},
   rank: [],
   chart: {}
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null,
                hEditorTheme: action.homeData?.find(item => item.sectionId === 'hEditorTheme') || {},
                hEditorTheme2: action.homeData?.find(item => item.sectionId === 'hEditorTheme2') || {},
                newRelease: action.homeData?.find(item => item.sectionType === 'new-release') || {},  
                weekChart: action.homeData?.find(item => item.sectionType === 'weekChart') || {},
                // hZC: action.homeData?.find(item => item.sectionId === 'hZC') || {},   
                rank: action.homeData?.find(item => item.sectionId === 'hZC')?.items || {},   
                chart: action.homeData?.find(item => item.sectionId === 'hZC')?.chart || {},   
            }
    
        default:
           return state
    }
}

export default appReducer