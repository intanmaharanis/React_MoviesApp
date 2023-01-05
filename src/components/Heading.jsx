import React from 'react';


const Heading = (props) => {
    return ( 
        <div className='text-white pb-8 px-6'> 
            <h1 className={`${props.size} font-semibold tracking-wide`} >{props.name}</h1>
        </div>
    );
}
 
export default Heading;