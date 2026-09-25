
"use client";

import { LibraryContext } from "@/context/Context";
import { useContext, useState } from "react";
import MyPlanCard from "./MyPlanCard";

import Link from "next/link";
import Sort from "./Sort";
import { TLibrary } from "@/types/Datatype";

interface ButtonTogglemyplaProps {
  activeTab: "todayplan" | "savelater";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"todayplan" | "savelater">
  >;
}

const ButtonTogglemypla = ({
  activeTab,
  setActiveTab,
}: ButtonTogglemyplaProps) => {


  const { todayPlan, saveLater , setTodayPlan , setSaveLater } = useContext(LibraryContext);

  const PlanOrSave = activeTab === "todayplan" ? todayPlan : saveLater;

    const setPlans = activeTab === "todayplan"? setTodayPlan : setSaveLater

    // Sort By

    const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration"
  );

  const sortHandle = (PlanOrSave :TLibrary[] ) => {

    const sortedMyplan = [...PlanOrSave]

    if(sortBy === "Duration"){

      sortedMyplan.sort((a,b) => b.duration - a.duration)

    }
    else if(sortBy === "Calories"){

      sortedMyplan.sort((a,b) => b.caloriesBurned - a.caloriesBurned)

    } else {
      sortedMyplan.sort((a,b) => b.rating - a.rating)
    }
    

    return sortedMyplan


  }

  const sortedMyplan = sortHandle(PlanOrSave) 

  return (
    <div>

      {/* Tabs */}
      <div className="mb-8 flex justify-between flex-col gap-4 items-center md:flex-row ">

       <div className="bg-[#151921] rounded-2xl p-2">
          {/* Today's Plan */}
        <button
          onClick={() => setActiveTab("todayplan")}
          className={`px-6 py-3 text-base font-semibold ${
            activeTab === "todayplan"
              ? " btn rounded-2xl text-[#CCFF00]"
              : "text-gray-500 "
          }`}
        >
          Today's Plan
        </button>

        {/* Save Later */}
        <button
          onClick={() => setActiveTab("savelater")}
          className={`px-6 py-3 text-base font-semibold ${
            activeTab === "savelater"
              ? " btn rounded-2xl text-[#CCFF00]"
              : "text-gray-500 "
          }`}
        >
          Saved
        </button>



       </div>

        {/* sort */}

        <Sort PlanOrSave={PlanOrSave} 
        sortBy = {sortBy}
        setSortBy = {setSortBy}
        
        />

      </div>

      {/* Empty Cards */}
      {sortedMyplan.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-[#111318] px-6 py-12 text-center">

          <h1 className="text-2xl font-bold text-white">
            NOTHING HERE YET
          </h1>

          <p className="mt-2 text-sm text-slate-400">
           Browse the library and add a lift to get today moving.
          </p>

         <Link href={'/'}>
         
          <button className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black hover:bg-[#b5eb00]">
            BROWSE WORKOUTS
          </button>
         </Link>

        </div>
      ) : (
        <div className="space-y-4">

          {sortedMyplan.map((plan) => (
            <MyPlanCard
              key={plan.id}
              plan={plan}
              setPlans = {setPlans }
              sortedMyplan={sortedMyplan }
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default ButtonTogglemypla;
