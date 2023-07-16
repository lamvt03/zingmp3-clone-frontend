import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    isPlaying: false,
    playlistSongs: null,
    curSongIndex: null
}

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null
            }
        case actionTypes.SET_IS_PLAYING:
            return {
                ...state,
                isPlaying: action.payload
            }
        case actionTypes.SET_PLAYLIST_SONGS:
            return {
                ...state,
                playlistSongs: action.songs
            }
        case actionTypes.SET_CUR_SONG_INDEX:
            return {
                ...state,
                curSongIndex: action.index
            }
        default:
           return state
    }
}

export default musicReducer