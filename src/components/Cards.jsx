import React from 'react';
import {MdGrade} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Cards = ({movies,search}) => {
    const navigate = useNavigate()
    return ( 
        <div className="cards-wrapper grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-x-3 gap-y-6 mx-6 text-white">
            {
               movies.map((movie,index) => (
                    <div className='card group relative text-sm  hover:scale-105 overflow-hidden' key={index} onClick={(e) => {
                                if (!e.defaultPrevented){
                                     navigate(`/Detail/${movie.id}`);
                                     search("")
                                }}}>
                            <div 
                            className='card-image w-full lg:h-60 rounded bg-gray-200 relative'>
                                <img 
                                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} 
                                alt="movieimage" 
                                className="h-full  w-full object-fill object-center rounded md:h-full lg:h-full">
                                </img>
                                <div className='absolute flex w-full text-xs top-2 justify-between px-1 md:text-sm md:p-2 lg:px-3'>
                                    <p className='font-bold shadow-lg bg-white text-black px-2 py-1 rounded-lg'>{movie.release_date.slice(0,4)}</p> 
                                    <p className="inline-flex items-center  bg-black rounded-full shadow-2xl px-2 lg:px-4 py-1  lg:text-md"><MdGrade style={{color:"yellow"}}/><span className="pl-1">{movie.vote_average}</span>
                                     </p> 
                                </div>
                            </div> 
                            <div className='card-body text-center pt-3'>
                                <h2 className="lg:text-lg  text-md font-bold">{movie.title}</h2>
                            </div>
                        </div> 
                ))
            }
            
            
        </div>

     );
}
 
export default Cards;