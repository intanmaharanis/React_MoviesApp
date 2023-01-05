import React, { useEffect, useState } from 'react';
import { getMovieComing } from '../api';
import Cards from '../components/Cards';
import Heading from '../components/Heading';

const Upcoming = () => {
    const [moviesUpcoming, setMoviesUpComing] = useState([]);

    useEffect(()=>{
        getMovieComing().then((result) => 
        setMoviesUpComing(result));
    },[])

    return ( 
        <div>
            <Heading name="Up Coming Movies" size="text-4xl"/>
           <Cards movies={moviesUpcoming}/>
        </div>
    );
}
 
export default Upcoming;