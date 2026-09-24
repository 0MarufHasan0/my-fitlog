"use client"

import { LibraryContext } from "@/context/Context";
import Link from "next/link";
import { useContext } from "react";


const NavRightSideBtn = () => {

    const {
        todayPlan ,
        saveLater
    } = useContext(LibraryContext)
    return (
        <div className="hidden gap-4 md:flex">
             <Link href={'/my-plan'}>
             
                                <button className="btn border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
                       Plan  <div className="badge bg-[#C2F800] text-[#000000] rounded-md badge-sm">{todayPlan.length}</div>
                       </button>             
             </Link>
           <Link href={'/my-plan'}>


 
       <button className="btn  border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
     Save  <div className="badge badge-sm rounded-md text-[#000000] bg-[#C2F800]">{saveLater.length}</div>
       </button>

          </Link>
        </div>
    );
};

export default NavRightSideBtn;