import { useSelector } from "react-redux";

import { ArtistInfo, GridSection, Section, SongInfo } from './'
import PageLoading from "./PageLoading";

function SearchAll() {
    const { searchData } = useSelector(state => state.app)
    console.log(searchData);
    return (
        <div>
            {searchData === null ? <PageLoading /> : searchData.counter.artist === 0 ? <div>Không tìm thấy kết quả</div> : <div>
                {/* noi bat  */}
                <div>
                    <h3
                        className="text-xl font-bold text-gray-700 mb-5 mt-8 pr-5"
                    >
                        Nổi Bật
                    </h3>
                    <div className="flex gap-7">
                        <div className="flex-1 p-[10px] bg-main-200 rounded-md group">
                            <ArtistInfo
                                hasType
                                thumbnail={searchData.artists[0].thumbnail}
                                thumbnailWidth={84}
                                artistsNames={searchData.artists[0].name}
                                totalFollow={searchData.artists[0].totalFollow}
                                textColor={'dark'}
                                hoverable={true}
                            />
                        </div>
                        <div className="flex-1 p-[10px] bg-main-200 rounded-md group">
                            <SongInfo
                                hasType
                                thumbnail={searchData.songs[0].thumbnail}
                                thumbnailWidth={84}
                                title={searchData.songs[0].title}
                                artistsNames={searchData.songs[0].artistsNames}
                                textColor={'dark'}
                                hoverable={true}
                            />
                        </div>
                        <div className="flex-1 p-[10px] bg-main-200 rounded-md group">
                            <SongInfo
                                hasType
                                thumbnail={searchData.songs[1].thumbnail}
                                thumbnailWidth={84}
                                title={searchData.songs[1].title}
                                artistsNames={searchData.songs[1].artistsNames}
                                textColor={'dark'}
                                hoverable={true}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h3
                        className="text-xl font-bold text-gray-700 mb-5 mt-8 pr-5"
                    >
                        Bài Hát
                    </h3>
                    <GridSection items={searchData.songs} col={2} row={3} />
                </div>
                <Section title={'Playlist'} items={searchData.playlists} />
                <div>
                    <h3
                        className="text-xl font-bold text-gray-700 mb-5 mt-8 pr-5"
                    >
                        Nghệ Sĩ/OA
                    </h3>
                    <div className="flex ml-[-14px] mr-[-14px]">
                        {searchData.artists.map((artist, index) => index < 5 && (
                            <div className={`w-1/5 px-[14px]`}>
                                <ArtistInfo
                                    thumbnail={artist.thumbnail}
                                    thumbnailWidth={'160'}
                                    artistsNames={artist.name}
                                    totalFollow={artist.totalFollow}
                                    isColumn
                                    textColor={'dark'}
                                    hoverable={true}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="pb-8"></div>
                </div>
            </div>}
        </div>
    );
}

export default SearchAll;