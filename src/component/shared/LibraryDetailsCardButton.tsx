
"use client"
import { LibraryContext } from '@/context/Context';
import { TLibrary } from '@/types/Datatype';
import { Bookmark, CalendarCheck2 } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
interface LibraryDetailsCardButtonProps {
    libraryData:TLibrary
}


const LibraryDetailsCardButton = ({libraryData}:LibraryDetailsCardButtonProps) => {
const {
todayPlan ,
setTodayPlan,
saveLater , 
setSaveLater

} = useContext(LibraryContext)

// Add Button

const handleAddButton = () => {

//       console.log("BUTTON CLICKED");
//   console.log("Library Data:", libraryData);
//   console.log("Library ID:", libraryData.id);
//   console.log("Library Name:", libraryData.name);

  const duplicateCheck: boolean = todayPlan.some(
    (plan) => plan.id === libraryData.id
  );

  if (duplicateCheck) {
    return toast.warn(
      `${libraryData.name} is already added!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }

  if(todayPlan.length >= 5){
      return toast.warn(
    "You can not add maximum 5 lifts to today's plan!",
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );

  }

setTodayPlan([...todayPlan,libraryData])

toast.success(`${libraryData.name} Successfully added Plan  `, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});


};

// SaveLater Button
const handleSaveLaterButton = () => {

  const duplicateCheck: boolean = saveLater.some(
    (plan) => plan.id === libraryData.id
  );

  if (duplicateCheck) {
    return toast.warn(
      `${libraryData.name} is already added!`,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }

setSaveLater([...saveLater,libraryData])

toast.success(`${libraryData.name} Successfully added saveLater  `, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});


};

    return (
        <div>
             <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <button onClick={handleAddButton}  className="btn w-full border-none bg-[#CCFF00] text-black hover:bg-[#b8e600] sm:w-auto">
                  <CalendarCheck2 size={18} />
                  Add to today&apos;s plan
                </button>
                <button onClick={handleSaveLaterButton} className="btn w-full border border-gray-500 bg-[#000000] text-white hover:bg-[#4B5563] sm:w-auto">
                <Bookmark size={18} />
                 Save for later
               </button>
              </div>
        </div>
    );
};

export default LibraryDetailsCardButton;