import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";

import * as apis from '../apis'
import * as actions from '../store/actions'
import icons from "../utils/icons";
import { getRandomIndex } from "../utils/fn";
import AudioSourceLoading from "./AudioSourceLoading";
import SongInfo from "./SongInfo";

const { AiOutlineHeart, LuMoreHorizontal, LiaRandomSolid, FaPlay, FaPause, GiNextButton, GiPreviousButton, PiRepeatFill, PiRepeatOnceFill, BiSolidPlaylist } = icons

function Player() {
    const { curSongId, isPlaying, playlistSongs, curSongIndex } = useSelector(state => state.music)
    const { showPlaylistSidebar } = useSelector(state => state.app)

    const [songInfo, setSongInfo] = useState(null)
    const [audioEl, setAudioEl] = useState(new Audio())
    const [curSeconds, setCurSeconds] = useState(0)

    // 0: normal, 1: repeat playlist, 2: repeat once
    const [repeatMode, setRepeatMode] = useState(0)
    const [isRandom, setIsRandom] = useState(false)
    const [isLoadingSource, setIsLoadingSource] = useState(false)

    // console.log(showPlaylistSidebar);
    const thumbRef = useRef()
    const trackRef = useRef()
    const nextBtnRef = useRef()

    const dispatch = useDispatch()
    const handleToggleButton = () => {
        if (isPlaying) {
            audioEl.pause()
        } else {
            audioEl.play()
        }
        dispatch(actions.setIsPlaying(!isPlaying))
    }
    const handleClickTrack = (e) => {
        const { left, width } = trackRef.current.getBoundingClientRect()
        const percent = Math.round((e.clientX - left) / width * 10000) / 100
        thumbRef.current.style.cssText = `right: ${100 - percent}%`
        audioEl.currentTime = Math.round(percent * songInfo?.duration / 100)
        setCurSeconds(audioEl.currentTime)
    }
    const handleClickPrevBtn = () => {
        if (playlistSongs) {
            const prevIndex = curSongIndex - 1 >= 0 ? curSongIndex - 1 : playlistSongs.length - 1
            dispatch(actions.setCurSongId(playlistSongs[prevIndex].encodeId))
            dispatch(actions.setIsPlaying(true))
            dispatch(actions.setCurSongIndex(prevIndex))
        }
    }
    const handleClickNextBtn = () => {
        if (playlistSongs) {
            let nextIndex
            if (isRandom) {
                nextIndex = getRandomIndex(playlistSongs, curSongIndex)
            } else {
                nextIndex = curSongIndex + 1 < playlistSongs.length ? curSongIndex + 1 : 0
            }
            dispatch(actions.setCurSongId(playlistSongs[nextIndex].encodeId))
            dispatch(actions.setIsPlaying(true))
            dispatch(actions.setCurSongIndex(nextIndex))
        }
    }
    const handleClickRandomBtn = () => {
        setIsRandom(!isRandom)
    }
    const handleClickRepeatBtn = () => {
        setRepeatMode(prev => prev === 2 ? 0 : prev + 1)
    }

    useEffect(() => {
        setIsLoadingSource(true)
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId)
            ])
            setIsLoadingSource(false)
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data)
                setCurSeconds(0)
                dispatch(actions.setCurSongData(res1.data.data))
            }
            if (res2.data.err === 0) {
                audioEl.pause()
                setAudioEl(new Audio(res2.data.data['128']))
            } else {
                audioEl.pause()
                setAudioEl(new Audio())
                alert(res2.data.msg)
            }
        }
        fetchDetailSong()

    }, [curSongId])

    useEffect(() => {
        audioEl.load()
        if (isPlaying) {
            audioEl.play()
        }
    }, [audioEl])

    useEffect(() => {
        const handleEnded = () => {
            if (repeatMode === 2) {
                audioEl.play()
            } else if (curSongIndex === playlistSongs.length - 1 && repeatMode === 1) {
                dispatch(actions.setCurSongId(playlistSongs[0].encodeId))
                dispatch(actions.setIsPlaying(true))
                dispatch(actions.setCurSongIndex(0))
            } else {
                handleClickNextBtn()
            }
        }
        audioEl.addEventListener('ended', handleEnded)

        return () => {
            audioEl.removeEventListener('ended', handleEnded)
        }
    }, [audioEl, repeatMode])

    useEffect(() => {
        if (isPlaying) {
            var intervalId = setInterval(() => {
                let percent = Math.round(audioEl.currentTime * 10000 / songInfo?.duration) / 100
                thumbRef.current.style.cssText = `right: ${100 - percent}%`
                setCurSeconds(Math.round(audioEl.currentTime))
            }, 200)
        }
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [audioEl, isPlaying])

    return (
        <div className="h-full bg-main-400  px-5 flex items-center">
            <div className="flex-auto w-[30%] flex items-center">
                <SongInfo
                    thumbnail={songInfo?.thumbnail}
                    thumbnailWidth={64}
                    title={songInfo?.title}
                    artistsNames={songInfo?.artistsNames}
                    textColor={'dark'}
                />
                <div className="ml-[10px] flex gap-4">
                    <span>
                        <AiOutlineHeart size={16} />
                    </span>
                    <span>
                        <LuMoreHorizontal size={16} />
                    </span>
                </div>
            </div>
            <div className="flex-auto w-[40%] flex flex-col gap-2 px-3">
                {/* control */}
                <div
                    className="flex gap-8 justify-center items-center"
                >
                    <span
                        onClick={handleClickRandomBtn}
                        className={isRandom ? 'text-main-500' : undefined}
                    >
                        <LiaRandomSolid size={20} />
                    </span>
                    <span
                        onClick={handleClickPrevBtn}
                        className={`cursor-pointer ${curSongIndex === null ? 'opacity-40 cursor-not-allowed' : undefined}`}
                    >
                        <GiPreviousButton size={20} />
                    </span>
                    <span
                        className="p-2 border border-gray-500 rounded-[50%] hover:text-main-500 hover:border-main-500 hover:cursor-pointer"
                        onClick={handleToggleButton}
                    >
                        {isLoadingSource ? <AudioSourceLoading size={20} /> : isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                    </span>
                    <span
                        ref={nextBtnRef}
                        onClick={handleClickNextBtn}
                        className={`cursor-pointer ${curSongIndex === null ? 'opacity-40 cursor-not-allowed' : undefined}`}
                    >
                        <GiNextButton size={20} />
                    </span>
                    <span
                        onClick={handleClickRepeatBtn}
                        className={repeatMode ? 'text-main-500' : undefined}
                    >
                        {repeatMode === 2 ? <PiRepeatOnceFill size={20} /> : <PiRepeatFill size={20} />}
                    </span>
                </div>

                {/* progress bar */}
                <div className="w-full flex items-center text-xs text-[#32323D] font-semibold">
                    <span className="mr-3 opacity-70">{moment.utc(curSeconds * 1000).format('mm:ss')}</span>
                    <div
                        ref={trackRef}
                        onClick={handleClickTrack}
                        className="h-[3px] flex-auto bg-[rgba(0,0,0,0.1)] m-auto relative rounded-l-full rounded-r-full hover:h-[6px] hover:cursor-pointer"
                    >
                        <div
                            ref={thumbRef}
                            className="absolute top-0 bottom-0 left-0 bg-main-500 rounded-l-full rounded-r-full"
                        >
                        </div>
                    </div>
                    <span className="ml-3">{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>
                </div>
            </div>
            <div className="flex-auto w-[30%]">
                <span
                    onClick={() => dispatch(actions.setShowPlaylistSidebar(!showPlaylistSidebar))}
                    className="p-2 bg-main-300 rounded-md"
                >
                    <BiSolidPlaylist />
                </span>
            </div>
        </div>
    );
}


export default Player;