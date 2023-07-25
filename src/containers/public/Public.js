import { Outlet } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Header, Player, NavSidebar, PlaylistSidebar } from "../../components";
import { useSelector } from "react-redux";
import { useRef } from "react";

function Public() {
    const { showPlaylistSidebar } = useSelector(state => state.app)
    const headerRef = useRef()

    const handleScroll = (e) => {
        if(headerRef){
            if(e.target.scrollTop >= 70){
                headerRef.current.classList.add('shadow-bottom')
            }else{
                headerRef.current.classList.remove('shadow-bottom')
            }
        }
    }
    return (
        <div onScroll={handleScroll} className="relative w-full h-screen flex flex-col bg-main-300 overflow-hidden">
            <div ref={headerRef} className="fixed top-0 left-[240px] right-0 h-[70px] px-[59px] z-10">
                <Header />
            </div>
            <div className="fixed top-0 left-0 bottom-0 w-[240px] bg-main-200 z-20">
                <NavSidebar />
            </div>
            <div className={`fixed top-0 bottom-[90px] right-[-330px] w-[330px] bg-main-300 z-20 ${showPlaylistSidebar ? 'animate-slide-sb-left' : 'animate-slide-sb-right'}`}>
                <PlaylistSidebar />
            </div>
            <div className="flex-auto ml-[240px]">
                <Scrollbars
                    style={{ width: '100%', height: '100%' }}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                    onScroll={handleScroll}
                >
                    <div className=""></div>
                    <div className="px-[59px] mt-[70px]">
                        <Outlet />
                    </div>
                </Scrollbars>
            </div>
            <div className="flex-none pb-[90px]"></div>

            <div className="fixed left-0 right-0 bottom-0 h-[90px] z-50">
                <Player />
            </div>
        </div>
    );
}

export default Public;