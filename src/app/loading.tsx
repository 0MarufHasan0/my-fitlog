import React from 'react';
import Skeleton from 'react-loading-skeleton';

const loading = () => {
    return (
        <div>
            <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-6">

        {/* ================= HERO ================= */}
        <section className="mb-8 rounded-lg border border-white/10 bg-[#15171b] p-8">
          <div className="flex items-center justify-between gap-8">

            {/* Hero Text */}
            <div className="w-full max-w-xl">

              <Skeleton
                width={112}
                height={12}
                baseColor="#25282d"
                highlightColor="#363a40"
              />

              <div className="mt-4">
                <Skeleton
                  width="100%"
                  height={36}
                  baseColor="#25282d"
                  highlightColor="#363a40"
                />

                <Skeleton
                  width="80%"
                  height={36}
                  baseColor="#25282d"
                  highlightColor="#363a40"
                />
              </div>

              <div className="mt-4">
                <Skeleton
                  width="100%"
                  height={12}
                  baseColor="#25282d"
                  highlightColor="#363a40"
                />

                <Skeleton
                  width="80%"
                  height={12}
                  baseColor="#25282d"
                  highlightColor="#363a40"
                />
              </div>

              <div className="mt-4">
                <Skeleton
                  width={128}
                  height={36}
                  borderRadius={6}
                  baseColor="#25282d"
                  highlightColor="#363a40"
                />
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden sm:block">
              <Skeleton
                width={176}
                height={176}
                circle
                baseColor="#25282d"
                highlightColor="#363a40"
              />
            </div>

          </div>
        </section>

        {/* ================= TITLE ================= */}
        <div className="mb-7">
          <Skeleton
            width={176}
            height={28}
            baseColor="#25282d"
            highlightColor="#363a40"
          />

          <div className="mt-2">
            <Skeleton
              width={256}
              height={12}
              baseColor="#25282d"
              highlightColor="#363a40"
            />
          </div>
        </div>

        {/* ================= WORKOUT CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#1c2228]"
            >

              {/* Image */}
              <Skeleton
                height={192}
                width="100%"
                borderRadius={0}
                baseColor="#25282d"
                highlightColor="#363a40"
              />

              {/* Card Body */}
              <div className="p-4">

                {/* Badges */}
                <div className="flex gap-2">
                  <Skeleton
                    width={56}
                    height={20}
                    borderRadius={999}
                    baseColor="#25282d"
                    highlightColor="#363a40"
                  />

                  <Skeleton
                    width={56}
                    height={20}
                    borderRadius={999}
                    baseColor="#25282d"
                    highlightColor="#363a40"
                  />
                </div>

                {/* Title */}
                <div className="mt-4">
                  <Skeleton
                    width={160}
                    height={20}
                    baseColor="#25282d"
                    highlightColor="#363a40"
                  />
                </div>

                {/* Description */}
                <div className="mt-4">
                  <Skeleton
                    width="100%"
                    height={12}
                    baseColor="#25282d"
                    highlightColor="#363a40"
                  />

                  <Skeleton
                    width="83%"
                    height={12}
                    baseColor="#25282d"
                    highlightColor="#363a40"
                  />
                </div>

                {/* Divider */}
                <div className="mt-4 border-t border-white/10 pt-4">

                  <div className="flex justify-between">
                    <Skeleton
                      width={48}
                      height={12}
                      baseColor="#25282d"
                      highlightColor="#363a40"
                    />

                    <Skeleton
                      width={48}
                      height={12}
                      baseColor="#25282d"
                      highlightColor="#363a40"
                    />

                    <Skeleton
                      width={48}
                      height={12}
                      baseColor="#25282d"
                      highlightColor="#363a40"
                    />
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
        </div>
    );
};

export default loading;