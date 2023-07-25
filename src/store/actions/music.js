import actionTypes from "./actionTypes";

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid
})

export const setIsPlaying = (payload) => ({
    type: actionTypes.SET_IS_PLAYING,
    payload
})

export const setPlaylistSongs = (songs) => ({
    type: actionTypes.SET_PLAYLIST_SONGS,
    songs
})
export const setCurSongIndex = (index) => ({
    type: actionTypes.SET_CUR_SONG_INDEX,
    index
})
export const setCurSongData = (data) => ({
    type: actionTypes.SET_CUR_SONG_DATA,
    data
})
export const setCurAlbumId = (aId) => ({
    type: actionTypes.SET_CUR_ALBUM_ID,
    aId
})

