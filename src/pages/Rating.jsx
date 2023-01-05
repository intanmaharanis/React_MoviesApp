import React, { useEffect, useState } from 'react';
import { getMovieTop } from '../api';
import Cards from '../components/Cards';
import Heading from '../components/Heading';

const Rating = () => {

    const [topRatingMovies, setTopRatingMovies] = useState([]);

    useEffect(()=>{
        getMovieTop().then((result) => {
            setTopRatingMovies(result);
        })
    },[])

    return ( 
        <div>
            <Heading name="Top Rating Movies" size="text-4xl"/>
            <Cards movies={topRatingMovies}/>
        </div>
    );
}
 
export default Rating;