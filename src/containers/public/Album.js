import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";


import * as apis from '../../apis/music'
import * as actions from '../../store/actions'
import SongList from "../../components/SongList";
import icons from "../../utils/icons";
import AudioLoading from "../../components/AudioLoading";
import PageLoading from "../../components/PageLoading";

const { FaPlay } = icons

function Album() {
    const { isPlaying } = useSelector(state => state.music)

    const { pid } = useParams()
    const [playlist, setPlaylist] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const respone = await apis.apiGetDetailPlaylist(pid)
            if (respone?.data.err === 0) {
                setPlaylist(respone.data?.data)
                dispatch(actions.setCurAlbumId(pid))
                dispatch(actions.setPlaylistSongs(respone.data?.data.song.items))
            }
        }
        fetchDetailPlaylist()
    }, [pid])

    return (
        <div>
            {!playlist ? <PageLoading /> : <div className="relative flex pt-8">
                <div className="fixed top-[70px] left-[300px] pt-8">
                    <div className="group relative overflow-hidden rounded-md">
                        <img
                            src={playlist.thumbnailM}
                            alt='thumbnail'
                            className="w-[300px] object-contain transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-0 bottom-0 left-0 right-0  flex justify-center items-center hover:bg-overlay-30 ">
                            {isPlaying ? <span className="p-3 rounded-full text-white border border-white">
                                <AudioLoading />
                            </span> : <span className="p-3 rounded-full text-white border border-white hidden group-hover:block">
                                <FaPlay size={25} />
                            </span>}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1 mt-3">
                        <h3
                            className="text-[20px] text-gray-800 font-bold"
                        >
                            {playlist.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                            Cập nhật:  {moment.unix(playlist.contentLastUpdate).format("DD/MM/YYYY")}
                        </span>
                        <span className="text-xs text-gray-500">
                            Tác giả:  {playlist.artistsNames}
                        </span>
                        <span className="text-xs text-gray-500">{`${Math.round(playlist.like / 1000)}K người yêu thích`}</span>
                    </div>
                </div>
                <div className="pl-[332px] flex-auto">
                    <p className="text-sm">
                        <span className="text-gray-600">Lời tựa </span>
                        <span className="text-gray-800">{playlist.sortDescription}</span>
                    </p>
                    <SongList totalDuration={playlist.song.totalDuration} />
                </div>
            </div>}
        </div>
    );
}

export default Album;