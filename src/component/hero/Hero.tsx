import Image from "next/image";
import BannerImg from "@/assets/banner.png";


const Hero = () => {
  return (

      <div className="container mx-auto mt-[40px] mb-[40px] flex  w-full max-w-7xl items-center justify-between gap-8 rounded-xl border border-[#292D35] bg-[#15171C] px-8 py-10 sm:px-10 flex-col md:flex-row lg:px-10 lg:py-10">

        {/* Content */}
        <div className="w-full max-w-2xl space-y-4 text-left">
          <h6 className="text-xs font-semibold tracking-widest text-[#C2F800]">
            WORKOUT LIBRARY
          </h6>

          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base">
           FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
            into today's plan, and watch the week's work add up.
          </p>

         <a href={"#library"}>
           <button className="btn border-0 bg-[#C2F800] px-6 text-sm font-bold text-black hover:bg-[#b5eb00]">
            BROWSE WORKOUTS
          </button>
         </a>
        </div>

        {/* Image */}
        <div className=" flex w-full max-w-sm flex-col-reverse items-center justify-center md:flex-row ">
          <Image
            src={BannerImg}
            alt="Fit Log Banner"
            width={500}
            height={500}
            priority
            className="h-auto w-full max-w-[300px] object-contain xl:max-w-[340px]"
          />
        </div>

      </div>
  
  );
};

export default Hero;