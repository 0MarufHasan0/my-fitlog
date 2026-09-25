
"use client";

import ButtonTogglemypla from "@/component/shared/ButtonTogglemypla";

import { LibraryContext } from "@/context/Context";
import { useContext, useState } from "react";

const MyPlan = () => {
  const { todayPlan, saveLater } = useContext(LibraryContext);

// activetab
  const [activeTab, setActiveTab] = useState<"todayplan" | "savelater">("todayplan");

//   Dynamic Statsplan

  const activePlan = activeTab === "todayplan" ? todayPlan : saveLater;

  // Dynamic calculation
  const TotalMinutes = activePlan.reduce((total, plan) => total + Number(plan.duration),0);

  const TotalKcal = activePlan.reduce((total, plan) => total + Number(plan.caloriesBurned),0);

  return (
    <div className="container mx-auto mt-10 ">

      {/* Header */}
      <h1 className="text-4xl">MY PLAN</h1>

      <p className="text-[#8A92A0]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Dynamic Stats */}
      <div className="stats w-full mt-10 border border-[#C2F800]/30 bg-[#0C0D10]">

        {/* Exercises */}
        <div className="stat">
          <div className="stat-title text-[#9CA3AF]">
            Exercises
          </div>

          <div className="stat-value text-[#C2F800]">
            {activePlan.length}
          </div>
        </div>

        {/* Minutes */}
        <div className="stat">
          <div className="stat-title text-[#9CA3AF]">
            Minutes
          </div>

          <div className="stat-value text-white">
            {TotalMinutes}
          </div>
        </div>

        {/* Calories */}
        <div className="stat">
          <div className="stat-title text-[#9CA3AF]">
            Calories
          </div>

          <div className="stat-value text-white">
            {TotalKcal}
          </div>
        </div>

      </div>

    {/* Tab and button */}
      <div className="mt-8">
    
           <ButtonTogglemypla
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

       
       </div>

      
      </div>

     

    
  );
};

export default MyPlan;

