import React,{useState,useEffect} from 'react';
import { getMoviePopular} from '../api';
import Cards from '../components/Cards';
import Heading from '../components/Heading';


const Popular = () => {
     
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
    getMoviePopular().then((result) => {
      setPopularMovies(result)
    })
    }, [])


    return ( 
        <div>
          <Heading name="Popular Movies" size="text-4xl"/>
          <Cards movies= {popularMovies} />
        </div>
     );
}
 
export default Popular;