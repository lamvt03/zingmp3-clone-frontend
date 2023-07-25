import actionTypes from "../actions/actionTypes";

const initState = {
    curSongId: null,
    curSongData: null,
    curAlbumId: null,
    isPlaying: false,
    playlistSongs: null,
    curSongIndex: null,
    recentSongs: []
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
        case actionTypes.SET_CUR_SONG_DATA:
            return {
                ...state,
                curSongData: action.data
            }
        case actionTypes.SET_CUR_ALBUM_ID:
            return {
                ...state,
                curAlbumId: action.aId
            }
        case actionTypes.ADD_RECENT_SONG:
            const songIndex = state.recentSongs.indexOf(action.song)
            if(songIndex !== -1){
                state.recentSongs.splice(songIndex, 1)
            }
            if(state.recentSongs.length === 5){
                state.recentSongs.pop()
            }
            return {
                ...state,
                recentSongs: [action.song, ...state.recentSongs]
            }
        default:
            return state
    }
}

export default musicReducer