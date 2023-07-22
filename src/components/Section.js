import { memo } from "react";
import { useNavigate } from "react-router-dom";

import icons from "../utils/icons";

const { FaPlay } = icons
function Section({ data }) {
    const navigate = useNavigate()
    const handleClickItem = (item) => {
        const albumPath = item.link.split('.')[0]
        navigate(albumPath)
    }
    return (
        <section
            className="mt-12"
        >
            <div
                className="flex justify-between items-center"
            >
                <h3 className="text-2xl font-bold text-gray-800">{data.title}</h3>
                <span className="text-xs">TẤT CẢ</span>
            </div>
            <div className="mt-8 flex ml-[-10px] mr-[-10px]">
                {data?.items?.map((item, index) => {
                    return index < 5 && (
                        <div
                            onClick={() => handleClickItem(item)}
                            key={item.encodeId}
                            className="w-1/5 px-[10px] hover:cursor-pointer"
                        >
                            <div className="group relative overflow-hidden rounded-md">
                                <img
                                    src={item.thumbnail}
                                    alt='thumbnail'
                                    className="object-contain transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-0 bottom-0 left-0 right-0 hidden group-hover:flex justify-center items-center bg-overlay-30 transition-all duration-300">
                                    <span className="p-3 rounded-full text-white border border-white">
                                        <FaPlay size={25} />
                                    </span>
                                </div>
                            </div>
                            <p
                                className="mt-3 text-[14px] text-[#696969] whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                                {item.sortDescription}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default memo(Section);