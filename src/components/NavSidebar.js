import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../assests/logo.svg'
import { sidebarMenu } from '../utils/menu'
import path from '../utils/path'

function NavSidebar() {
    const activeStyle = 'flex items-center gap-2 py-3 px-[21px] font-semibold text-[#0F7070] text-[14px]'
    const notActiveStyle = 'flex items-center gap-2 py-3 px-[21px] font-semibold text-[#32323D] text-[14px]'

    const navigator = useNavigate();
    return <div>
        <div>
            <div 
                className='w-full py-[15px] px-[25px] flex justify-start items-center cursor-pointer'
                onClick={() => navigator(path.HOME)}
            >
                <img
                    className='w-[120px] h-10 object-contain'
                    src={logo} 
                    alt='Logo'
                />
            </div>

            <div
                className='flex flex-col'
            >
                {sidebarMenu.map(item => (
                    <NavLink 
                    key={item.path}
                    className={({isActive}) => isActive ? activeStyle : notActiveStyle}
                    to={item.path}
                >
                    {item.icon} 
                    <span>{item.text}</span>
                </NavLink>
                ))}
            </div>    
        </div>
    </div>;
}

export default NavSidebar;