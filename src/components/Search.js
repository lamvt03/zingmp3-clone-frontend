import icons from "../utils/icons";

const { BsSearch } = icons

function Search() {
    return (
        <div className="flex items-center gap-4 w-[440px] max-w-[440px] bg-[#DDE4E4] h-10  rounded-[20px] px-4 py-2 text-gray-500">
            <span>
                <BsSearch size={20}/>
            </span>
            <input 
                type="text"
                className="bg-transparent outline-none flex-auto"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
            
        </div>  
    );
}

export default Search;