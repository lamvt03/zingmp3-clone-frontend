import { Outlet } from "react-router-dom";

function Search() {
    return (
        <main>
            <div className="ml-[-59px] mr-[-59px] border-b border-gray-400">
                <div className="px-[59px] py-3">
                    <div className="flex items-center">
                        <h3 className="text-2xl font-bold text-gray-700 pr-5 border-r border-gray-400">Kết Quả Tìm Kiếm</h3>
                        <nav>
                            <span className="px-5 text-gray-700 font-semibold hover:text-main-500 hover:cursor-pointer">TẤT CẢ</span>
                            <span className="px-5 text-gray-700 font-semibold hover:text-main-500 hover:cursor-pointer">BÀI HÁT</span>
                            <span className="px-5 text-gray-700 font-semibold hover:text-main-500 hover:cursor-pointer">PLAYLIST/ALBUM</span>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </main>
    );
}

export default Search;