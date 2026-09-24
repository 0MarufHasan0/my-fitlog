
"use client";

import { LibraryContext } from "@/context/Context";
import { useContext } from "react";
import MyPlanCard from "./MyPlanCard";
import Link from "next/link";

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

  return (
    <div>

      {/* Tabs */}
      <div className="mb-8 flex border-b border-base-300">

        {/* Today's Plan */}
        <button
          onClick={() => setActiveTab("todayplan")}
          className={`px-6 py-3 text-base font-semibold ${
            activeTab === "todayplan"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Today's Plan ({todayPlan.length})
        </button>

        {/* Save Later */}
        <button
          onClick={() => setActiveTab("savelater")}
          className={`px-6 py-3 text-base font-semibold ${
            activeTab === "savelater"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          Save Later ({saveLater.length})
        </button>

      </div>

      {/* Empty Cards */}
      {PlanOrSave.length === 0 ? (
        <div className="rounded-2xl border border-slate-800 bg-[#111318] px-6 py-12 text-center">

          <h1 className="text-2xl font-bold text-white">
            NOTHING HERE YET
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Browse the library and add a workout to get started.
          </p>

         <Link href={'/'}>
         
          <button className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-bold text-black hover:bg-[#b5eb00]">
            BROWSE WORKOUTS
          </button>
         </Link>

        </div>
      ) : (
        <div className="space-y-4">

          {PlanOrSave.map((plan) => (
            <MyPlanCard
              key={plan.id}
              plan={plan}
              PlanOrSave ={PlanOrSave}
              setPlans = {setPlans }
            />
          ))}

        </div>
      )}

    </div>
  );
};

export default ButtonTogglemypla;
