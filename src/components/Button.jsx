import React from 'react';

const Button = ({name,bgColor, position}) => {
    return ( 
        <div>
            <button className={` ${bgColor} lg:text-md text-white text-sm rounded-full px-4 py-2 ${position} `}><a href='.'>{name}</a></button>
        </div>
     );
}
 
export default Button;