import Link from "next/link";
//components
import Socials from "../components/Socials";
//icons
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="flex items-center font-bold pt-1 xl:text-[30px] text-lg">
              <SlArrowLeft />
              Kim Eden
              <SlArrowRight />
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
