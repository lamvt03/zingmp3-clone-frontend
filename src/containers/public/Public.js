import { Outlet } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars-2';

import { Header, Player, Sidebar } from "../../components";

function Public() {
    return (
        <div className="relative w-full h-screen flex bg-main-300">
            <div className="fixed top-0 left-[240px] right-0 h-[70px] px-[59px] z-50">
                <Header/>
            </div>
            <div className="w-[240px] flex-none bg-main-200">
                <Sidebar/>
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