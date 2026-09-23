import LogoImg from "@/assets/logo.png";
import Navlinks from "./Navlinks";
import Image from "next/image";
import MobileResponsiveNav from "./MobileResponsiveNav";

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
    <div className="bg-[#0C0D10] border-b border-[#9CA3AF] sticky z-10 top-0">
      <div className=" flex justify-around items-center py-4 px-4">

        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Image
            src={LogoImg}
            alt="Fit Log Logo"
            width={30}
            height={30}
          />

          <h1 className="text-white text-3xl font-bold">
            FITLOG
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Navlinks href={link.href}>
                {link.name}
              </Navlinks>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-2">
          <button className="text-white btn">
            Plan {0}
          </button>

          <button className="text-white btn">
            Saved {0}
          </button>
        </div>

        {/* Mobile */}
        <MobileResponsiveNav navLinks={navLinks} />

      </div>
    </div>
  );
};

export default Navbar;