import React from 'react';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
    return ( 
        <div className='min-h-screen bg-black'>
            <span>
                <Skeleton width={50} baseColor="#202020" highlightColor="#444"/>
            </span>
            <div className='grid grid-col-1 lg:grid-cols-3 py-6'>
                <div className='left-col lg:col-span-1 h-96'>
                    <Skeleton height={500} baseColor="#202020" highlightColor="#444"/>
                </div>
                <div className='detail-wrap w-full lg:pl-10 lg:pr-24 lg:col-span-2'>
                    <h1 className='pt-6 lg:pt-0'><Skeleton baseColor="#202020" highlightColor="#444" count={2}/></h1>
                    <div className='my-4'>
                       <Skeleton baseColor="#202020" highlightColor="#444"/>
                    </div>
                    <div className='lg:text-lg'>
                        <Skeleton baseColor="#202020" highlightColor="#444" count={5}/>
                    </div>
                    <div className='my-10'>
                        <Skeleton baseColor="#202020" highlightColor="#444"/>
                    </div>
                </div>
                
               
            </div>
            
            
        </div>
     );
}
 
export default CardSkeleton;