import { getData } from '@/lib/Data';
import React from 'react';
import LibraryCard from './LibraryCard';
import { TLibrary } from '@/types/Datatype';

const Librar = async() => {
    const getLibaryData = await getData()
    return (
        <div className='container mx-auto px-4'>

            <h1 className='text-[#FFFFFF] text-4xl'>
                THE LIBRARY
            </h1>

            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-10 mt-5 md:mt-10'>

                {
                       getLibaryData.map((library:TLibrary) => (
                       <LibraryCard
                     key={library.id}
                    library={library}
                     />
                      ))
            }
                     








            </div>
            
        </div>
    );
};

export default Librar;