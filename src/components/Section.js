import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Section() {
    const { chill } = useSelector(state => state.app)
    console.log(chill);

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
                <h3 className="text-xl font-bold">{chill.title}</h3>
                <span className="text-xs">TẤT CẢ</span>
            </div>
            <div className="mt-5 flex">
                {chill?.items?.map((item, index) => {
                    return index < 5 && (
                        <div
                            onClick={() => handleClickItem(item)}
                            key={item.encodeId}
                            className="w-1/5 px-[10px] hover:cursor-pointer"
                        >
                            <div>
                                <img
                                    className="object-contain rounded-md"
                                    src={item.thumbnail}
                                    alt="avatar"
                                />
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