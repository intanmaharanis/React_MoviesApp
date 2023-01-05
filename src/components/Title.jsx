import React from 'react';
import {MdNavigateNext} from "react-icons/md";
import { Link} from 'react-router-dom';


const Title = ({name, link}) => {
    return ( 
        <div className="flex justify-between mb-4 items-baseline px-6 text-white">
            <h1 className="text-md font-semibold tracking-wide lg:text-2xl">{name}</h1>
            <Link to={link} className="inline-flex text-sm lg:text-lg  hover:text-[yellow] items-center">See All <MdNavigateNext size={24}/></Link> 
        </div>
     );
}
 
export default Title;