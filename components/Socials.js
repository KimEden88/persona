import Link from "next/link";

// icons
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg xl:text-3xl ">
      <Link
        className="hover:text-accent transition-all duration-300"
        href={"https://www.linkedin.com/in/kim-eden/"}
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        className="hover:text-accent transition-all duration-300"
        href={"https://github.com/KimEden88"}
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
