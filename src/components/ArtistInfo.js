import moment from "moment";
import 'moment/locale/vi'

import icons from "../utils/icons";
import { handleConcern } from "../utils/fn";

const { LiaRandomSolid } = icons
function ArtistInfo({ hasType, thumbnail, thumbnailWidth, artistsNames, totalFollow, textColor, hoverable, isColumn}) {

    return (
        <div className={`flex ${isColumn ? 'flex-col': ''} items-center hover:cursor-pointer`}>
            <div className={`mr-[10px] relative overflow-hidden rounded-full ${isColumn ? 'mb-4': ''}`}>
                <img
                    style={{width: `${thumbnailWidth}px`}}
                    className='object-contain'
                    src={thumbnail}
                    alt='thumbnail'
                />
                {hoverable && <div className={`absolute top-0 left-0 bottom-0 right-0 text-white justify-center items-center hidden bg-overlay-30 group-hover:flex`}>
                    <LiaRandomSolid size={20}/>
                </div>}
            </div>
            <div className={`flex flex-col justify-center ${isColumn ? 'items-center': ''}`}>
                {hasType && <span
                    className = {`${textColor === 'dark' ? 'text-gray-500': 'text-[#ffffff80]'} text-xs mb-1`}
                >
                    Nghệ sĩ
                </span>}
                <h3
                    className={`font-semibold ${textColor === 'dark' ? 'text-gray-700' : 'text-white'} text-[14px]`}
                >
                    {artistsNames}
                </h3>
                <span
                    className = {`${textColor === 'dark' ? 'text-gray-500': 'text-[#ffffff80]'} text-xs`}
                >
                    {handleConcern(totalFollow)} quan tâm
                </span>
            </div>
        </div>
    );
}

export default ArtistInfo;