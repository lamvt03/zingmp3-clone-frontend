import { memo } from "react";
import SongListItem from "./SongListItem";

import icons from "../utils/icons";
import moment from "moment";
import { useSelector } from "react-redux";

const {BsDot} = icons
function SongList({totalDuration}) {
    const musicState = useSelector(state => state.music)
    const songs = musicState.playlistSongs
    
    return ( 
        <div className="text-xs text-gray-600">
            <div className="w-full flex justify-between font-semibold uppercase p-[10px]">
                <span className="w-[50%]">Bài hát</span>
                <span className="w-[40%]">Album</span>
                <span className="w-[10%] text-right">Thời gian</span>
            </div>
            <div className="flex flex-col">
                {songs?.map((song, index) => (            
                    <SongListItem
                        key={song.encodeId} 
                        songData={song}
                        songIndex = {index}
                    />
                ))}
            </div>
            <span className="flex gap-2 items-center pt-4 border-t border-t-[rgba(0,0,0,0.05)] text-sm">
                <span>{`${songs?.length} bài hát`}</span>
                <span><BsDot size={20}/></span>
                <span>{moment.utc(totalDuration * 1000).format('HH:mm')}</span>
            </span>
        </div>
     );
}

export default memo(SongList);