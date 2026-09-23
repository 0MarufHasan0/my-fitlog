import Image from "next/image";
import FooterLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className=" w-full footer items-center bg-neutral p-15 text-neutral-content sm:footer-horizontal border-t mt-10 border-[#292D35]">
      <aside className="grid-flow-col items-center">
        <Image
          src={FooterLogo}
          alt="Logo"
          width={20}
          height={20}

          className="rotate-[-45deg]"
          
        
        />

        <h1>FITLOG</h1>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p className="text-[#9CA3AF] text-[15px]">
         ©  {new Date().getFullYear()} FitLog - Workout Library. Train hard, log honest.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;