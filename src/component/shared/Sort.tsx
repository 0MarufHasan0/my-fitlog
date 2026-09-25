"use client"

import { TLibrary } from "@/types/Datatype";

interface SortProps {
    PlanOrSave:TLibrary[]
    sortBy : "Duration" | "Calories" | "Rating" 
    setSortBy : React.Dispatch<React.SetStateAction<"Duration" | "Calories" | "Rating" >>
}


const Sort = ({ sortBy , setSortBy}: SortProps) => {


    return (

        <div className="flex gap-3 items-center text-[#8A92A0]">
      
      <h1>Sort By</h1>
        
        
        
        
        <div>
   <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as "Duration" | "Calories" | "Rating" )} defaultValue={"Duration"} className="select appearance-none">
  <option disabled={true}>Sort By</option>
  <option value={"Duration"}>Duration</option>
  <option value={"Calories"}>Calories</option>
  <option value={"Rating"}>Rating</option>
</select>
        </div>
        </div>
    );
};

export default Sort;