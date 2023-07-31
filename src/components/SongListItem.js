import { memo } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import icons from "../utils/icons";
import * as actions from '../store/actions'
import AudioLoading from "./AudioLoading";

const { BsMusicNoteBeamed, FaPlay } = icons

function SongListItem({songData, songIndex}) {
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(actions.setCurSongId(songData.encodeId))
        dispatch(actions.setIsPlaying(true))
        dispatch(actions.setCurSongIndex(songIndex))
        dispatch(actions.addRecentSong(songData))
    }
    return (
        <div
            onClick={handleClick} 
            className={`flex justify-between items-center w-full p-[10px] border-t border-t-[rgba(0,0,0,0.05)] rounded-sm ${curSongId === songData.encodeId ? 'bg-main-200' : undefined} hover:bg-main-200 hover:cursor-pointer group`}
        >
            <div className="flex items-center w-[50%]">
                <span className="text-gray-500 mr-3">
                    <BsMusicNoteBeamed size={14}/>
                </span>
                <div className="flex-none relative rounded-md overflow-hidden">
                    <img 
                        className="w-10 object-contain"
                        src={songData?.thumbnail}
                        alt="thumbnail"
                    />
                    <div className={`absolute top-0 left-0 bottom-0 right-0 text-white justify-center items-center ${isPlaying && curSongId === songData.encodeId ? 'flex' : 'hidden'} group-hover:bg-overlay-30 group-hover:flex`}>
                        {isPlaying && curSongId === songData.encodeId ? <AudioLoading/> : <FaPlay size={16}/>}
                    </div>
                </div>
                <div className="flex flex-col ml-3 gap-1">
                    {/* <span className="font-semibold text-gray-500 text-[14px]">{songData?.title.length > 30 ? songData?.title.slice(0,30) + '...' : songData?.title}</span> */}
                    <span className="font-semibold text-gray-500 text-[14px] max-w-full whitespace-nowrap overflow-hidden text-ellipsis">{songData?.title}</span>
                    <span>{songData?.artistsNames}</span>
                </div>
            </div>
            <div className="w-[40%]">
                {songData?.album?.title}
            </div>
            <div className="w-[10%] text-right"> 
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
     );
}

export default memo(SongListItem);