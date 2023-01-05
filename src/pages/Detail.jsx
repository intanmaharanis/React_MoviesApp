import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detailMovies, creditsMovies, getSimilarMovies } from '../api';
import { MdGrade,MdOutlineArrowBackIosNew} from "react-icons/md";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import BackdropCard from '../components/BackdropCard';
import CardSkeleton from '../components/CardSkeleton';
const Detail = () => {

    let { movieID } = useParams();
    const [detail, setDetail] = useState(null);
    const [credits, setCredits] = useState(null)
    const [similar, setSimilar] = useState(null)
    useEffect(() => {
        
        detailMovies(`${movieID}`).then((result) => {
            setDetail(result);
        })
    }, [movieID])

    useEffect(() => {
       
       creditsMovies(`${movieID}`).then((result) => {
            setCredits(result);
        })
    }, [movieID])

      useEffect(()=>{
        
       getSimilarMovies(`${movieID}`).then((result) => {
            setSimilar(result);
        })
    },[movieID])

    const navigate = useNavigate();
    const replaceImage = (error) => {
        error.target.src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
    }
    

    return (
        <div className='pb-10 h-full px-4'>
            {!detail && !credits && !similar &&  <CardSkeleton/>}
            {detail && credits && similar && <div> <div className='inline-flex items-center cursor-pointer hover:text-[red]' 
            onClick={(e) => {if(!e.defaultPrevented){
                navigate(-1)};
            }}>
                <span className="pr-2"><MdOutlineArrowBackIosNew/> </span>
                <span> Back</span>
            </div>
            <section className="detail-hero w-full min-h-screen grid grid-col-1 lg:grid-cols-3 shadow-3xl py-6 items-center px-2">
                <figure className='w-full border border-gray-600 rounded-xl lg:col-span-1'>
                    <img src={`${process.env.REACT_APP_BASEIMGURL}/${detail.poster_path}`} alt="backdrop" className='w-full h-full rounded-xl' />
                </figure>
                <div className='detail-wrap w-full lg:pl-10 lg:pr-24 lg:col-span-2'>
                    <h1 className='text-3xl font-bold pt-6 lg:pt-0'>{detail.title}  <span className='font-light'>( {detail.release_date.substr(0, 4)} )</span></h1>
                    <div className='pt-3 text-xs lg:text-sm'>
                        <span className='pr-2'>{detail.release_date.split("-").reverse().join("/")} |</span>
                        <span>{detail.genres.map((dat) => (
                            <span key={dat.id} className="border border-gray-600 mx-[1px] px-2 rounded-lg">{dat.name}</span>
                        ))} |</span>
                        <span> {Math.floor(detail.runtime / 60)} jam {detail.runtime % 60} menit</span>

                    </div>
                    <div className='text-xl my-4'>
                        <span className='inline-flex items-center'><MdGrade style={{ color: "yellow" }} /> <span className="pl-1">{detail.vote_average.toFixed(1)}</span></span>
                    </div>
                    <div className='text-md my-10 text-justify lg:text-lg'>
                        <p className='font-semibold'>Overview</p>
                        <p>{detail.overview}</p>
                    </div>
                    <div className='my-10 text-md'>
                        <div className='flex flex-row'>{credits.crew.slice(0,3).map((credit,i) => (
                            <div key={i} className="basis-1/3">
                                <p className='font-bold'>{credit.name}</p>
                                <p>{credit.job}</p>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </section>
            <section className=' max-w-full'>
                 <div className='text-md my-10'>
                    <Heading name="Cast" size="text-3xl"/>
                    <div className='cast-wrap flex flex-nowrap mx-2 pb-10 text-center cursor-pointer overflow-x-auto'>
                        {credits.cast.slice(0,12).map((cast,i) => (
                        <div key={i} className="card text-sm min-w-[50%] lg:min-w-[12%] md:min-w-[25%] lg:w-[15%] mx-2 drop-shadow-2xl border border-gray-400 rounded-md pb-4">
                            <figure className='h-48 pb-2'>
                                <img src={`${process.env.REACT_APP_BASEIMGURL}/${cast.profile_path}`} alt="profile cast" className='w-full h-full object-center object-fill rounded-t-md' onError={replaceImage}/>
                            </figure>
                            <p className='font-bold tracking-wide'>{cast.name}</p>
                            <p>{cast.character}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='similar-movies-wrap text-md my-12'>
                    <Heading name="Similar Movies" size="text-3xl"/>
                    <BackdropCard movies={similar.slice(0,4)}/>
                </div> 
             
            </section></div>}
           
        </div>
    );
}

export default Detail;