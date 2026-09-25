import React from 'react';
import Skeleton from 'react-loading-skeleton';

const loading = () => {
    return (
        <div>
             <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div>
          <Skeleton
            width={160}
            height={40}
            baseColor="#17191d"
            highlightColor="#25282d"
          />

          <div className="mt-2">
            <Skeleton
              width={300}
              height={16}
              baseColor="#17191d"
              highlightColor="#25282d"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-[#C2F800]/30 bg-[#0d0f12] sm:grid-cols-3">

          {["Exercises", "Minutes", "Calories"].map((item) => (
            <div
              key={item}
              className="border-b border-white/10 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <Skeleton
                width={70}
                height={13}
                baseColor="#17191d"
                highlightColor="#25282d"
              />

              <div className="mt-3">
                <Skeleton
                  width={25}
                  height={35}
                  baseColor="#17191d"
                  highlightColor="#25282d"
                />
              </div>
            </div>
          ))}

        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}
          <div className="flex w-fit gap-2 rounded-2xl bg-[#171b23] p-2">
            <Skeleton
              width={110}
              height={40}
              borderRadius={12}
              baseColor="#1d222a"
              highlightColor="#292f38"
            />

            <Skeleton
              width={70}
              height={40}
              borderRadius={12}
              baseColor="#1d222a"
              highlightColor="#292f38"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <Skeleton
              width={55}
              height={16}
              baseColor="#17191d"
              highlightColor="#25282d"
            />

            <Skeleton
              width={90}
              height={40}
              borderRadius={5}
              baseColor="#17191d"
              highlightColor="#25282d"
            />
          </div>

        </div>

        {/* Empty State Skeleton */}
        <div className="mt-8 flex min-h-[225px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#111318] px-5">

          <Skeleton
            width={210}
            height={28}
            baseColor="#1b1e23"
            highlightColor="#292d33"
          />

          <div className="mt-4">
            <Skeleton
              width={320}
              height={16}
              baseColor="#1b1e23"
              highlightColor="#292d33"
            />
          </div>

          <div className="mt-7">
            <Skeleton
              width={165}
              height={45}
              borderRadius={30}
              baseColor="#1b1e23"
              highlightColor="#292d33"
            />
          </div>

        </div>

      </div>
    </main>
        </div>
    );
};

export default loading;