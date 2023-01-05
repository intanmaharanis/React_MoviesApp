import React, {useState} from 'react';
import {FaRegCalendarAlt } from 'react-icons/fa';
import { MdExplore,MdTrendingUp,MdPlayCircleFilled,MdStar} from "react-icons/md";
import { AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
import logo from "../logo.png"
import { NavLink} from 'react-router-dom';
import Search from '../components/Search';
import { searchMovies } from '../api';
import Cards from '../components/Cards';
import '../App.css';

const Sidebar = ({children}) =>{
  
    const [movieQuery, setMovieQuery] = useState([]);
    const [nav,setNav] = useState(false);

    const search = async (q) =>{
    if (q.length > 3) {
        const query = await searchMovies(q)
        setMovieQuery(query.results);
    }else if(q.length < 3){
         setMovieQuery([]);
    }}

    let activeStyle = {
        color: "red",
    };

    const links = [
        {  
            path:"/",
            name : "Browse",
            icon : <MdExplore size={24} />
        },
        {  
            path:"/Popular",
            name : "Popular",
            icon : <MdTrendingUp size={24} />
        },
        {  
            path:"/Latest",
            name : "Latest",
            icon : <MdPlayCircleFilled size={24} />
        },
        {  
            path:"/Rating",
            name : "Top Rating",
            icon : <MdStar size={24} />
        },
        {  
            path:"/Upcoming",
            name : "Coming Soon",
            icon : <FaRegCalendarAlt size={24} />
        }
          
    ]

  
        
    return(
        <>
        <nav className="fixed top-0 left-0 z-10 h-screen py-6 px-2 bg-black text-gray-300 sm:text-md border-r border-r-[#34343482] shadow-2xl" style={{width: nav ? "32vh" : "12vh"}}
        onMouseEnter={() => setNav(!nav)}
        onMouseLeave={() => setNav(false)}>
            <button className='float-right mb-8'>
               {nav ? <AiOutlineMenuFold size={24}/> : <AiOutlineMenuUnfold size={24}/> } 
            </button>
            <div className='clear-right flex items-center mb-4'>
               <img src= { logo } alt="movie" className='w-16 h-16'></img>
                {nav && <span className='text-xl'>Movie Tan</span>}
            </div>
            <ul className=" cursor-pointer hover z-10 px-4">    
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path} 
                            className=" flex items-center justify-between py-6 pb-3 font-semibold relative transition-all w-min-content"
                            style={({isActive}) => isActive ? activeStyle : undefined}
                            >
                            <span className='flex-0'>{link.icon}</span> 
                            {nav && <span className='px-4 text-md flex-1'>{link.name}</span>}
                        </NavLink >
                    </li>   
                ))} 
            </ul>      
        </nav>
        <main className="bg-black pl-[12vh] h-full text-white">
            <nav className="shadow-3xl flex justify-end">
                <Search onChangeSearch={search} className/>
            </nav>  
            <Cards movies={movieQuery} search={search}/>
            {movieQuery.length === 0 &&  <div className='clear-both'>{children}</div> }
        </main>
        </>
        

    )
}

export default Sidebar;