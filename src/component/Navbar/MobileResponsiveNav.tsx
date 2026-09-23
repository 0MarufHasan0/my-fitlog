
"use client"

import { Dumbbell, X } from "lucide-react";
import { useState } from "react";
import Navlinks from "./Navlinks";

interface Navprops {
  name: string;
  href: string;
}

interface MobileResponsiveNavProps {
  navLinks: Navprops[];
}


const MobileResponsiveNav = ({navLinks}:MobileResponsiveNavProps) => {

    const [isOpen , setOpen] = useState<boolean>(false)

    return (
        <div >

            <button onClick={()=> setOpen(!isOpen)}
                
                className="btn bg-[#000000] md:hidden">

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
          <button  onClick={() => setOpen(false)} className="text-white btn">
            Plan {0}
          </button>

          <button  onClick={() => setOpen(false)} className="text-white btn">
            Saved {0}
          </button>
        </div>
   </div>
                )
            }
            
        </div>
    );
};

export default MobileResponsiveNav;