
import { TLibrary } from "@/types/Datatype";
import { Clock4, Flame, Star  } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';


interface LibraryCardProps {
  library: TLibrary;
}

const LibraryCard = ({ library }: LibraryCardProps) => {
  return (
  <div className="card bg-[#000000] shadow-sm  border-2 border-transparent transition-all duration-300 hover:border-[#C2F800]    " >


<Link href={"/"}>

  {/* Image */}
      <figure>
        <Image
          src={library.image}
          alt={library.name}
          width={400}
          height={300}
          className="h-[200px] w-full object-fill"
        />
      </figure>



      {/* Card Body */}
      <div className="card-body">


        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {library.muscleGroups.map((badge) => (
            <p
              key={badge}
              className="badge rounded-full bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
            >
              {badge}
            </p>
          ))}
        </div>


        {/* Title */}
        <h2 className="card-title mt-2">
          {library.name}
        </h2>

        {/* Description */}
        <p className="text-[#9CA3AF]">
          {library.description}
        </p>

        {/* Divider */}
        <div className="divider"></div>


        {/* Workout Info */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-[#9CA3AF]">
          {/* Duration */}
          <div className="flex items-center gap-2">
            <Clock4 size={18} color="#C2F800"/>
            
            <span>{library.duration} min</span>
          </div>


          {/* Calories */}
          <div className="flex items-center gap-2">
           <Flame size={18} color="#C2F800"  />
            <span>{library.caloriesBurned}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Star size={18} color="#C2F800" />
            <span>{library.rating}</span>
          </div>
        </div>
      </div>
   




</Link>
 </div>
 
  );
};

export default LibraryCard;
