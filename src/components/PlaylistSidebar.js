import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars-2';

import icons from "../utils/icons";
import * as apis from '../apis'
import * as actions from '../store/actions'
import SongInfo from './SongInfo'

const { ImBin2 } = icons
function PlaylistSidebar() {
    const { curSongData, curAlbumId, playlistSongs, recentSongs } = useSelector(state => state.music)
    const [isRecent, setIsRecent] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!playlistSongs) {
            const fetchDetailPlaylist = async () => {
                const respone = await apis.apiGetDetailPlaylist(curAlbumId)
                if (respone?.data.err === 0) {
                    dispatch(actions.setPlaylistSongs(respone.data?.data.song.items))
                }
            }
            fetchDetailPlaylist()
        }
    }, [curAlbumId])
    return (
        <aside className="flex flex-col h-full">
            <div className="h-[70px] py-[14px] flex items-center justify-center">
                <div className="px-2 flex items-center text-gray-500">
                    <div className="text-xs font-semibold px-1 py-2 bg-main-200 rounded-xl">
                        <span
                            onClick={() => setIsRecent(false)}
                            className={`hover:cursor-pointer px-6 py-1 rounded-lg ${!isRecent ? 'bg-main-100 text-main-500' : 'bg-transparent'}`}
                        >
                            Danh sách phát
                        </span>
                        <span
                            onClick={() => setIsRecent(true)}
                            className={`hover:cursor-pointer px-6 py-1 rounded-lg ${isRecent ? 'bg-main-100 text-main-500' : 'bg-transparent'}`}
                        >
                            Nghe gần đây
                        </span>
                    </div>
                    <span className="ml-2 p-2 rounded-full bg-main-200"><ImBin2 size={18} /></span>
                </div>
            </div>
            <div className="flex-auto">
                <Scrollbars
                    style={{ width: '100%', height: '100%' }}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                >
                    <div className="p-2">
                        {isRecent
                            ? <div>
                                {recentSongs.map(song => (
                                    <div className="p-2 group hover:cursor-pointer" key={song.encodeId}>
                                        <SongInfo
                                            thumbnail={song.thumbnail}
                                            thumbnailWidth={40}
                                            title={song.title}
                                            artistsNames={song.artistsNames}
                                            textColor={'dark'}
                                            hoverable={true}
                                        />
                                    </div>))}
                            </div>
                            : <div>
                                <div className="bg-main-500 rounded-md p-2">
                                    <SongInfo
                                        thumbnail={curSongData.thumbnail}
                                        thumbnailWidth={40}
                                        title={curSongData.title}
                                        artistsNames={curSongData.artistsNames}
                                        textColor={'light'}
                                    />
                                </div>
                                <div className="p-2 pt-3 text-sm">
                                    <h3 className="text-gray-700 font-bold">Tiếp theo</h3>
                                    <span className="flex gap-1">
                                        <span className="text-gray-400">Từ playlist</span>
                                        <span className="text-main-500 font-semibold"> {curSongData?.album.title}</span>
                                    </span>
                                </div>
                                {playlistSongs && <div>
                                    {playlistSongs.map(song => (
                                        <div
                                            key={song.encodeId}
                                            className="rounded-md p-2 hover:bg-main-200 group"
                                            onClick={() => dispatch(actions.setCurSongId(song.encodeId))}
                                        >
                                            <SongInfo
                                                thumbnail={song.thumbnail}
                                                thumbnailWidth={40}
                                                title={song.title}
                                                artistsNames={song.artistsNames}
                                                textColor={'dark'}
                                                hoverable={true}
                                            />
                                        </div>
                                    ))}
                                </div>}
                            </div>
                        }
                    </div>
                </Scrollbars>
            </div>

        </aside>
    );
}

export default PlaylistSidebar;