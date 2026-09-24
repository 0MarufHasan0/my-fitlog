"use client";

import { TLibrary } from "@/types/Datatype";
import { Clock4, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

interface MyPlanCardProps {
  plan: TLibrary;
  PlanOrSave: TLibrary[];
  setPlans: React.Dispatch<React.SetStateAction<TLibrary[]>>;
}

const MyPlanCard = ({
  plan,
  PlanOrSave,
  setPlans,
}: MyPlanCardProps) => {

  // Mark as Done state
  const [isMark, setIsMark] = useState(false);

  // Remove
  const handleRemove = () => {
    const remove = PlanOrSave.filter(
      (f) => f.id !== plan.id
    );

    setPlans(remove);

    toast.success(`${plan.name} Removed Successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  // Mark as Done
  const handleMarksAsDone = () => {
    setIsMark(true);

    toast.success(`${plan.name} Marked Successfully`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-slate-800 bg-[#111318] p-3 transition hover:border-lime-400/40 hover:bg-[#15171d] sm:p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Left Side */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            
            {/* Image */}
            <div className="shrink-0 overflow-hidden rounded-xl border border-slate-700">
              <Image
                src={plan.image}
                alt={plan.name}
                width={70}
                height={70}
                className="h-16 w-16 object-cover sm:h-[70px] sm:w-[70px]"
              />
            </div>

            {/* Information */}
            <div className="min-w-0 flex-1">
              
              {/* Name */}
              <h3 className="truncate text-sm font-bold uppercase text-white sm:text-base">
                {plan.name}
              </h3>

              {/* Equipment */}
              <p className="mt-1 truncate text-xs text-slate-400 sm:text-sm">
                {plan.equipment}
              </p>

              {/* Stats */}
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-xs sm:mt-3 sm:gap-4">
                
                {/* Duration */}
                <span className="flex items-center gap-1 text-lime-400">
                  <Clock4 size={16} />
                  <span className="text-slate-300">
                    {plan.duration} min
                  </span>
                </span>

                {/* Calories */}
                <span className="flex items-center gap-1 text-lime-400">
                  <Flame size={16} />
                  <span className="text-slate-300">
                    {plan.caloriesBurned} kcal
                  </span>
                </span>

                {/* Rating */}
                <span className="flex items-center gap-1 text-lime-400">
                  <Star size={16} />
                  <span className="text-slate-300">
                    {plan.rating}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="flex w-full items-center gap-2 lg:w-auto lg:shrink-0">
            
            {/* View Details */}
            <Link
              href={`/library/${plan.id}`}
              className="hidden sm:block"
            >
              <button
                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-white transition hover:border-lime-400 hover:text-lime-400 sm:px-5"
              >
                View Details
              </button>
            </Link>

            {/* Mark as Done */}
            <button
              onClick={handleMarksAsDone}
              disabled={isMark}
              className={`flex flex-1 items-center justify-center rounded-full px-4 py-2 text-xs font-bold transition sm:flex-none ${
                isMark
                  ? "cursor-default bg-green-500 text-white"
                  : "bg-lime-400 text-black hover:bg-lime-300"
              }`}
            >
              ✓
              <span className="ml-1">
                {isMark ? "Marked as Done" : "Mark as Done"}
              </span>
            </button>

            {/* Remove */}
            <button
              onClick={handleRemove}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
            >
              X
            </button>
          </div>
        </div>

        {/* Mobile View Details */}
        <div className="mt-3 sm:hidden">
          <Link href={`/library/${plan.id}`}>
            <button className="w-full rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-white transition hover:border-lime-400 hover:text-lime-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPlanCard;