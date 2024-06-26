//next
import Image from "next/image";
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link
        href={"/projects"}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group hover:text-[#FF621F]"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          alt="my project icon"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] "
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
