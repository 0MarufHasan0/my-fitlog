
"use client"

import { Dumbbell, X } from "lucide-react";
import { useContext, useState } from "react";
import Navlinks from "./Navlinks";
import Link from "next/link";
import { LibraryContext } from "@/context/Context";

interface Navprops {
  name: string;
  href: string;
}

interface MobileResponsiveNavProps {
  navLinks: Navprops[];
}


const MobileResponsiveNav = ({navLinks}:MobileResponsiveNavProps) => {

    const [isOpen , setOpen] = useState<boolean>(false)

    
        const {
            todayPlan ,
            saveLater
        } = useContext(LibraryContext)

    return (
        <div >

            <button onClick={()=> setOpen(!isOpen)}
                
                className="btn bg-base-100 md:hidden">

                {isOpen ?   <X /> : <Dumbbell color="#C2F800" /> }


            </button>


            {
                isOpen && (

                    <div className="absolute bg-[#0C0D10] left-0 top-full w-full border-t p-5 shadow-md">

                        <ul className="flex  flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Navlinks  onClick={() => setOpen(false)} href={link.href}>
                {link.name}
              </Navlinks>
            </li>
          ))}
        </ul>

        
        {/* Buttons */}
        <div className="flex flex-col gap-2">
       <Link href={'/my-plan'}>
             
                                <button onClick={()=>setOpen(false)} className="btn w-full border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
                       Plan  <div className="badge bg-[#C2F800] text-[#000000] rounded-md badge-sm">{todayPlan.length}</div>
                       </button>             
             </Link>
           <Link href={'/my-plan'}>


 
       <button onClick={()=>setOpen(false)}  className="btn w-full border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
     Save  <div className="badge badge-sm rounded-md text-[#000000] bg-[#C2F800]">{saveLater.length}</div>
       </button>

          </Link>
        </div>
   </div>
                )
            }
            
        </div>
    );
};

export default MobileResponsiveNav;