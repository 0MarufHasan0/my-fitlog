import Image from 'next/image';
import LogoImg from "../assets/logo.png"
import Navlinks from './Navlinks';



const Navbar = () => {


   
    return (
       <div className='bg-[#0C0D10] border-b border-[#9CA3AF] sticky z-10 top-0'>
         <div className= " container mx-auto flex justify-between items-center py-4 px-4">

          {/* Logo */}

            <div className='flex gap-3  items-center'>

                <Image

                src={LogoImg}
                alt='Fit Log Logo'
                width={30}
                height={30}

                
                
                />

                <h1 className='text-[#FFFFFF] text-3xl font-bold'>
                   FITLOG
                </h1>

            </div>

            {/* Ul */}
            <ul className='flex gap-4'>
                
                <li>
                    <Navlinks href={'/'}>
                        Home
                    </Navlinks>
                </li>


                <li>
                    <Navlinks href={"/my-plan"} >
                        My Plan
                    </Navlinks>
                </li>


        
               
            </ul>

            {/* Button */}

         <div className='flex gap-2'>
               <button className='text-[#FFFFFF] btn'>Plan{0}</button>
               <button className='text-[#FFFFFF] btn'>Saved{0}</button>
         </div>


            
        </div>
       </div>
    );
};

export default Navbar;