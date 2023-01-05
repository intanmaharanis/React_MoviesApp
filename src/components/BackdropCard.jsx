import React from 'react';
import {MdGrade} from "react-icons/md";
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const BackdropCard = ({movies}) => {
    const navigate = useNavigate()
    return ( 
        <div className="px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-white" >
                {movies.map((movie, index) => (
                    <div 
                        className=" m-2 rounded-xl relative mb-4 text-center hover:scale-[1.05]" 
                        key={index}
                        onClick={(e) => {
                            if (!e.defaultPrevented){
                                    navigate(`/Detail/${movie.id}`)
                                    window.scrollTo(0,0)
                            }}}
                    >
                        <figure className='w-full h-54'>
                             <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.backdrop_path}`}  alt="movie-poster" className="h-full w-full object-center rounded-xl"/>
                        </figure>
                        <div className='pt-3 px-3'>
                            <h2 className="lg:text-md  text-md font-bold">{movie.title}</h2>
                            <p className="text-sm py-1 text-gray-200 font-light">
                                {movie.release_date.split("-").reverse().join(" - ")}
                            </p>
                        </div> 
                        <p className="inline-flex items-center absolute bg-black rounded-full shadow-xl px-4 py-1 text-sm top-2 right-2"><MdGrade style={{color:"yellow"}}/> <span className="pl-2">{movie.vote_average.toFixed(1)}</span></p> 
                        <Button name="Upcoming" bgColor="bg-red-700" position="absolute top-24 right-3 md:top-28"/>
                    </div>
                ))} 
                </div> 
     );
}
 
export default BackdropCard;