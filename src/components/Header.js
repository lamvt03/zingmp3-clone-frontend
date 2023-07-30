import icons from "../utils/icons";
import SearchBar from "./SearchBar";

const {HiArrowNarrowLeft, HiArrowNarrowRight} = icons

function Header() {

    return (
        <div className="flex justify-between h-full items-center bg-[rgba(206,217,217,0.99)]">
            <div className="flex gap-5 items-center">
                <div className="flex gap-5 text-gray-400">
                    <span>
                        <HiArrowNarrowLeft size={24}/>
                    </span>
                    <span>
                        <HiArrowNarrowRight size={24}/>
                    </span>
                </div>
                <div className="">
                    <SearchBar/>
                </div>  
            </div>
            <div>
               Login
            </div>
        </div>
    )
}

export default Header;