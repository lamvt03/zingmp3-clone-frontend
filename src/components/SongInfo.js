import moment from "moment";
import 'moment/locale/vi'

import icons from "../utils/icons";

const { FaPlay } = icons
function SongInfo({ thumbnail, thumbnailWidth,  title, artistsNames, releaseDate, textColor, hoverable}) {

    return (
        <div className="flex items-center hover:cursor-pointer">
            <div className="mr-[10px] relative overflow-hidden rounded-md">
                <img
                    style={{width: `${thumbnailWidth}px`}}
                    className='object-contain'
                    src={thumbnail}
                    alt='thumbnail'
                />
                {hoverable && <div className={`absolute top-0 left-0 bottom-0 right-0 text-white justify-center items-center hidden bg-overlay-30 group-hover:flex`}>
                    <FaPlay size={16}/>
                </div>}
            </div>
            <div className="flex flex-col justify-center">
                <h3
                    className={`font-semibold ${textColor === 'dark' ? 'text-gray-700' : 'text-white'} text-[14px]`}
                >
                    {title}
                </h3>
                <span
                    className = {`${textColor === 'dark' ? 'text-gray-500': 'text-[#ffffff80]'} text-xs`}
                >
                    {artistsNames}
                </span>
                {releaseDate && <span className = {`${textColor === 'dark' ? 'text-gray-500': 'text-[#ffffff80]'} text-xs`}>{moment.utc(releaseDate * 1000).fromNow()}</span>}
            </div>
        </div>
    );
}

export default SongInfo;