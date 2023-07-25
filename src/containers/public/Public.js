import { Outlet } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Header, Player, NavSidebar, PlaylistSidebar } from "../../components";
import { useSelector } from "react-redux";

function Public() {
    const { showPlaylistSidebar } = useSelector(state => state.app)

    return (
        <div className="relative w-full h-screen flex bg-main-300 overflow-hidden">
            <div className="fixed top-0 left-[240px] right-0 h-[70px] px-[59px] z-10">
                <Header/>
            </div>
            <div className="w-[240px] flex-none bg-main-200">
                <NavSidebar/>
            </div>
            <div className={`fixed top-0 bottom-[90px] right-[-330px] w-[330px] bg-main-300 z-20 ${showPlaylistSidebar ? 'animate-slide-sb-left' : 'animate-slide-sb-right'}`}>
                <PlaylistSidebar/>
            </div>
            <Scrollbars
                style={{ width: '100%', height: '100%' }} 
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
            >
                <div className="flex-auto mt-[70px] mb-[90px] px-[59px]">
                    <Outlet/>
                </div>
            </Scrollbars>
            
            <div className="fixed left-0 right-0 bottom-0 h-[90px] z-50">
                <Player/>
            </div>
        </div>
    );
}

export default Public;