import LogoImg from "@/assets/logo.png";
import Navlinks from "./Navlinks";
import Image from "next/image";
import MobileResponsiveNav from "./MobileResponsiveNav";
import NavRightSideBtn from "./NavRightSideBtn";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];

  return (
    <header className="sticky left-0 top-0 z-10 w-full border-b border-[#292D35] bg-[#0C0D10]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src={LogoImg}
            alt="Fit Log Logo"
            width={30}
            height={30}
            priority
          />

          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            FITLOG
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Navlinks href={link.href}>
                {link.name}
              </Navlinks>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">

         
          {/* <button className="btn border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
            Plan {0}
          </button>

          <button className="btn border-0 bg-[#222630] text-white hover:bg-[#2c303a]">
            Saved {0}
          </button> */}

          <NavRightSideBtn/>

     
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileResponsiveNav navLinks={navLinks} />
        </div>

      </div>
    </header>
  );
};

export default Navbar;