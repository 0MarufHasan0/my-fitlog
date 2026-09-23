import Image from 'next/image';
import BannerImg from "@/assets/banner.png"
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <Image

    src={}
    alt=''
    
    
    
    
    
    />
   
    <div>
        <h6 className='text-[#C2F800]'>WORKOUT LIBRARY</h6>
      <h1 className="text-6xl font-bold">TRAIN WITH INTENT. LOG</h1>
      <p className="py-6 text-[#9CA3AF]">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      </p>
      <button className="btn w-full text-[black] bg-[#C2F800]">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;