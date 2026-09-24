
import { Bookmark, CalendarCheck2 } from "lucide-react";
import Image from "next/image";


interface LibraryDetailsProps {
  params: Promise<{ id: string }>;
}

const getData = async (id: string) => {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`
    );
    const data = await res.json();

 return data

};

const LibraryDetails = async ({ params }: LibraryDetailsProps) => {
  const { id } = await params;

  const libraryData = await getData(id);

  if (!libraryData) {
   return "data not found"
  }

  const details = [
    { label: "EQUIPMENT", value: libraryData.equipment },
    { label: "DIFFICULTY", value: libraryData.difficulty },
    { label: "SETS", value: libraryData.sets },
    { label: "REPS", value: libraryData.reps },
    { label: "DURATION", value: `${libraryData.duration} min` },
    { label: "CALORIES", value: `${libraryData.caloriesBurned} Kcal ` },
    { label: "RATING", value: libraryData.rating },
  ];

  return (
    <main className="min-h-screen bg-[#000000] px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="rounded-2xl  py-6 lg:py-10 ">
          <div className="hero-content flex-col items-stretch gap-8 lg:flex-row lg:items-stretch">

            {/* Image */}
              <div className="w-full lg:w-1/2">
                <Image
                 src={libraryData?.image}
                alt={libraryData?.name}
               width={800}
              height={800}
               priority
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[400px] lg:h-full"
               />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col lg:w-1/2">

              {/* Name */}
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {libraryData.name}
              </h1>

              {/* Description */}
              <p className="py-4 text-sm leading-7 text-[#9CA3AF] sm:text-base">
                {libraryData.description}
              </p>

              {/* Muscle Group Badges */}
              <div className="flex flex-wrap gap-2">
                {libraryData.muscleGroups.map((badge:string) => (
                  <span
                    key={badge}
                    className="badge rounded-full bg-[#C2F800] px-3 py-3 text-xs font-medium text-black sm:text-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Details Table */}
              <div className="mt-8 w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table w-full">
                  <tbody>
                    {details.map((item) => (
                      <tr key={item.label}>
                        <td className="w-1/2 text-xs font-medium sm:text-sm text-[#9CA3AF]">
                          {item.label}
                        </td>

                        <td className="break-words text-right text-sm font-semibold sm:text-base text-[#9CA3AF]">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Instructions */}
              <div className="mt-8">
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                  Instructions
                </h2>

                <ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-[#D1D5DB] sm:text-base">
                  {libraryData.instructions.map(
                    (instruction:string, index:number) => (
                      <li key={index} className="pl-1">
                        {instruction}
                      </li>
                    )
                  )}
                </ol>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <button className="btn w-full border-none bg-[#CCFF00] text-black hover:bg-[#b8e600] sm:w-auto">
                  <CalendarCheck2 size={18} />
                  Add to today&apos;s plan
                </button>
                <button className="btn w-full border border-gray-500 bg-[#000000] text-white hover:bg-[#4B5563] sm:w-auto">
                <Bookmark size={18} />
                 Save for later
               </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LibraryDetails;