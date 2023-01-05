import React, {useState,useEffect} from 'react';
import { getMoviePopular, getMovieTop,getMovieComing,getMovieLatest} from '../api';
import Cards from '../components/Cards';
import '../App.css';
import Title from '../components/Title';
import BackdropCard from '../components/BackdropCard';

const Home = () => {

    const[popularMovies, setPopularMovies] = useState([]);
    const [topRatingMovies, setTopRatingMovies] = useState([]);  
    const [moviesUpcoming, setMoviesUpComing] = useState([]);
    const [movieLatest, setMovieLatest] = useState([]);
    
    useEffect(() => {
        getMovieLatest().then((result) => {
            setMovieLatest(result)
        })
    }, []);

    useEffect(()=>{
        getMovieTop().then((result) => {
            setTopRatingMovies(result);
        })
    },[])
    
    useEffect(()=>{
        getMoviePopular().then((result) => {
            setPopularMovies(result)
        })
    },[])
  
    useEffect(()=>{
        getMovieComing().then((result) => 
        setMoviesUpComing(result));
    },[])

   
    return (  
        <div>
            <section className="coming-soon shadow-4xl mb-2">
                <Title name="Upcoming Movies" link="/Upcoming"/>
                <BackdropCard movies={moviesUpcoming.slice(0,4)}/>
            </section>
            <section className='popular-movies'>
                <Title name="Popular Movies" link="/Film/Popular"/>
                <Cards movies={popularMovies.slice(0,6)}/>    
            </section>
            <section className='top-rated-movies py-8'>
                <Title name="Top Rating" link="/Film/Rating"/>
                <Cards movies={topRatingMovies.slice(0,6)} />    
            </section>
            <section className='latest-movies py-8'>
                <Title name="Latest Trailer" link="/Film/Latest"/>
                <Cards movies={movieLatest.slice(0,6)} />    
            </section>
        </div>
    );
}
 
export default Home;