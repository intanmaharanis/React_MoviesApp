import React, { useEffect, useState } from 'react';
import { getMovieLatest} from '../api';
import Cards from '../components/Cards';
import Heading from '../components/Heading';
const Latest = () => {

    const [movieLatest, setMovieLatest] = useState([]);

    useEffect(() => {
        getMovieLatest().then((result) => {
            setMovieLatest(result);
        })
    }, []);

    return ( 
        <div>
            <Heading name="Latest Movies" size="text-4xl"/>
            <Cards movies= {movieLatest} />
        </div>
     );
}
 
export default Latest;