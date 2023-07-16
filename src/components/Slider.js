import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions'

import { getSliderArr } from "../utils/fn";
import { useNavigate } from "react-router-dom";

function Slider() {
    const { banner } = useSelector(state => state.app)
    const dispath = useDispatch()
    const navigate = useNavigate()

    const handleClick = (item) => {
        if(item?.type === 1){
            dispath(actions.setCurSongId(item.encodeId))
            dispath(actions.setIsPlaying(true))
            dispath(actions.setPlaylistSongs(null))
            dispath(actions.setCurSongIndex(null))
        }else if(item?.type === 4){
            const albumPath = item.link.split('.')[0]
            navigate(albumPath)
        }
    }
    useEffect(() => {
        const slider = document.querySelectorAll('.slider-item')
        let min = 0, max = 2
        const internalId = setInterval(() => {
            const list = getSliderArr(min, max, slider.length)
            for(let i = 0; i < slider.length; i++){
                slider[i]?.classList.remove('animate-slide-right', 'order-last', 'z-20')
                slider[i]?.classList.remove('animate-slide-left', 'order-first', 'z-10')
                slider[i]?.classList.remove('animate-slide-left2', 'order-2', 'z-10')

                if(list.some(item => item === i)){
                    slider[i].style.display = 'block'
                }else{
                    slider[i].style.display = 'none'
                }   
            }

            list.forEach(item => {
                if(item === max){
                    slider[item]?.classList.add('animate-slide-right', 'order-last', 'z-20')
                }else if(item === min){
                    slider[item]?.classList.add('animate-slide-left', 'order-first', 'z-10')
                }else{
                    slider[item]?.classList.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })

            min = (min === slider.length-1) ? 0 : min+1
            max = (max === slider.length-1) ? 0 : max+1
                
        }, 2500)

        return () => { 
            internalId && clearInterval(internalId)
        }
    }, [])

    return ( 
        <div className="flex overflow-hidden pt-8">
            {banner?.map((item, index) => (
                <div
                    key={item.encodeId} 
                    className={`slider-item w-1/3 flex-1 px-[15px] ${index > 2 ? 'hidden' : ''}`}
                    onClick={() => handleClick(item)}
                >
                    <img
                        src={item.banner}
                        className="rounded-lg object-contain"
                />
                </div>      
            ))}
        </div>
     );
}

export default Slider;