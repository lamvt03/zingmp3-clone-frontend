import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import icons from "../utils/icons";
import * as apis from '../apis'
import * as actions from '../store/actions'
import path from '../utils/path'

const { BsSearch } = icons

function SearchBar() {
    const [keyword, setKeyword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.search(keyword))
            navigate({
                pathname: `${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                   q: keyword
                }).toString()
            });
        }
    }

    return (
        <div className="flex items-center gap-4 w-[440px] max-w-[440px] bg-[#DDE4E4] h-10  rounded-[20px] px-4 py-2 text-gray-500">
            <span>
                <BsSearch size={20} />
            </span>
            <input
                type="text"
                className="bg-transparent outline-none flex-auto"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
            />

        </div>
    );
}

export default SearchBar;