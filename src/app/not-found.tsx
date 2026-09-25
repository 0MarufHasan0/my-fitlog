import Image from "next/image";
import Link from "next/link";
import Img404 from "@/assets/banner.png";

const NotFoundPage = () => {
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center bg-base-200 px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#C2F800]">
                FitLog
              </p>

              <h1 className="text-7xl font-black tracking-tight text-base-content sm:text-8xl">
                404
              </h1>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Workout Not Found!
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-base-content/60 lg:mx-0">
                Looks like you took a wrong turn. This workout page doesn&apos;t
                exist anymore. Don&apos;t worry, your next workout is waiting
                for you.
              </p>

              {/* Back to Home Button */}
              <div className="mt-8">
                <Link href="/">
                  <button className="btn border-0 bg-[#C2F800] px-8 text-sm font-bold text-black hover:bg-[#b5eb00]">
                    BACK TO HOME
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              {/* Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />

              <Image
                src={Img404}
                alt="404"
                width={500}
                height={500}
                priority
                className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-10 text-center text-sm text-base-content/40">
            <p>
              <span className="font-semibold text-base-content/60">
                Keep moving.
              </span>{" "}
              Your fitness journey doesn&apos;t stop here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;