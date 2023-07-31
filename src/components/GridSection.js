import moment from "moment";
import { memo } from "react";

import SongInfo from "./SongInfo";
import { arrToMatrix } from "../utils/fn";

function GridSection({ items, col, row }) {
    const matrix = arrToMatrix(items, col, row)
    // console.log(matrix);
    console.log(col);
    return (
        <section>
            <div className="flex ml-[-14px] mr-[-14px]">
                {matrix.map(cols => (
                    <div className={`w-1/${col} px-[14px]`}>
                        {cols.map(row => (
                            <div className="p-[10px] rounded-md border-b border-gray-300 hover:bg-main-200">
                                <div className="flex items-center group">
                                    <div className="flex-1">
                                        <SongInfo
                                            thumbnail={row.thumbnail}
                                            thumbnailWidth={40}
                                            title={row.title}
                                            artistsNames={row.artistsNames}
                                            textColor={'dark'}
                                            hoverable={true}
                                        />
                                    </div>
                                    <span className="text-xs text-gray-600">
                                        {moment.utc(row.duration * 1000).format('mm:ss')}
                                    </span>
                                </div>

                            </div>
                        ))}
                    </div>
                ))}
                {/* <div className="w-1/2 px-[14px]">
                    <div className="p-[10px] rounded-md border-b border-gray-300 hover:bg-main-200">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <SongInfo
                                    thumbnail={items[0].thumbnail}
                                    thumbnailWidth={40}
                                    title={items[0].title}
                                    artistsNames={items[0].artistsNames}
                                    textColor={'dark'}
                                    hoverable={true}
                                />
                            </div>
                            <span className="text-xs text-gray-600">
                                {moment.utc(items[0].duration * 1000).format('mm:ss')}
                            </span>
                        </div>

                    </div>
                </div>
                <div className="w-1/2 px-[14px]">
                    <div className="p-[10px] rounded-md hover:bg-main-200">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <SongInfo
                                    thumbnail={items[0].thumbnail}
                                    thumbnailWidth={40}
                                    title={items[0].title}
                                    artistsNames={items[0].artistsNames}
                                    textColor={'dark'}
                                    hoverable={true}
                                />
                            </div>
                            <span className="text-xs text-gray-600">
                                {moment.utc(items[0].duration * 1000).format('mm:ss')}
                            </span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default memo(GridSection);