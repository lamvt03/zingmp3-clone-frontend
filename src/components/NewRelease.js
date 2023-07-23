import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import SongInfo from "./SongInfo";
import tabs from '../utils/tabs'
import * as actions from '../store/actions'

function NewRelease() {
    const { newRelease } = useSelector(state => state.app)

    //all, others, vPop
    const [curTabKey, setCurTabKey] = useState('all')
    const [songs, setSongs] = useState()

    const dispatch = useDispatch()
    
    useEffect(() => {
        setSongs(newRelease?.items?.[curTabKey])
    }, [newRelease, curTabKey])

    const handleClickItem = (curSongId) => {
        dispatch(actions.setCurSongId(curSongId))
        dispatch(actions.setIsPlaying(true))
    }

    return (
        <section className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800">{newRelease.title}</h3>
            <div
                className="flex justify-between items-center mt-6"
            >
                <div className="flex gap-5">
                    {tabs.map((tab) => (
                        <Button 
                            key={tab.key} 
                            text={tab.text} 
                            active={tab.key === curTabKey}
                            onclick={() => setCurTabKey(tab.key)} 
                        />
                    ))}
                    
                </div>
                <span className="text-xs">TẤT CẢ</span>
            </div>
            <div className="mt-3 ml-[-14px] mr-[-14px] flex flex-wrap">
                {songs?.map((song, index) => (
                    index < 12 && <div key={song.encodeId} className="w-1/3 mt-3 px-[14px] ">
                        <div onClick={() => handleClickItem(song.encodeId)} className="p-2 rounded-md hover:bg-main-200 hover:cursor-pointer">
                            <SongInfo
                                thumbnail={song.thumbnail}
                                thumbnailWidth={16}
                                title={song.title}
                                artistsNames={song.artistsNames}
                                releaseDate={song.releaseDate}
                                textColor={'dark'}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default NewRelease;