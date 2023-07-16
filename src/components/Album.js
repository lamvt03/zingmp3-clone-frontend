import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment/moment";


import * as apis from '../apis/music'
import * as actions from '../store/actions'
import SongList from "./SongList";

function Album() {
    const { pid } = useParams()
    const [playlist, setPlaylist] = useState({})

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDetailPlaylist = async() => {
            const respone = await apis.apiGetDetailPlaylist(pid)
            if(respone?.data.err === 0){
                setPlaylist(respone.data?.data)
                dispatch(actions.setPlaylistSongs(respone.data?.data.song.items))
            }
        }
        fetchDetailPlaylist()
    }, [pid])
    
    return ( 
        <div className="flex gap-8 pt-8"> 
            <div className="flex-none w-1/4">
                <div>
                    <img
                        src={playlist?.thumbnailM}
                        alt='thumbnail'
                        className="object-contain rounded-md"
                    />
                </div>
                <div className="flex flex-col justify-center items-center gap-1 mt-3">
                    <h3
                            className="text-[20px] text-gray-800 font-bold"
                        >
                            {playlist?.title}
                    </h3>
                    <span className="text-xs text-gray-500"> 
                        Cập nhật:  {moment.unix(playlist?.contentLastUpdate).format("DD/MM/YYYY")}
                    </span>
                    <span className="text-xs text-gray-500"> 
                        Tác giả:  {playlist?.artistsNames}
                    </span>
                    <span className="text-xs text-gray-500">{`${Math.round(playlist?.like/1000)}K người yêu thích`}</span>
                </div>
            </div>
            <div className="flex-auto">
                <p className="text-sm">
                    <span className="text-gray-600">Lời tựa </span>
                    <span className="text-gray-800">{playlist.sortDescription}</span>
                </p>
                <SongList totalDuration={playlist?.song?.totalDuration}/>
            </div>
        </div>
     );
}

export default Album;