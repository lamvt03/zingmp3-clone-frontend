import moment from "moment";
import 'moment/locale/vi'

function SongInfo({ thumbnail, thumbnailWidth,  title, artistsNames, releaseDate, textColor}) {

    return (
        <div className="flex items-center">
            <div className="mr-[10px]">
                <img
                    className={`w-${thumbnailWidth} rounded-md object-contain`}
                    src={thumbnail}
                    alt='thumbnail'
                />
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