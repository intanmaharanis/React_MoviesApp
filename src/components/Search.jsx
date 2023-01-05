import React from 'react';
// import { searchMovies } from '../api';
import {MdSearch} from "react-icons/md";

const Search = ({onChangeSearch}) => {

    
    return ( 
        <div className='px-8  py-6 '>
             <label className="relative block text-[#cbcaca82] lg:w-96 w-56 md:w-72">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><MdSearch size={22}/></svg>
                </span>
                <input 
                className="placeholder:italic placeholder:text-[#cbcaca82] block bg-transparent w-full border border-[#65646482] rounded-full py-2 pl-12 pr-3 shadow-2xl focus:outline-none focus:border-[#dcdadad1] sm:text-sm" 
                placeholder="Search for anything..." 
                type="text" 
                name="search"
                onChange={({target}) => onChangeSearch(target.value)}
                 />
            </label>
        </div>
       
     );
}
 
export default Search;