// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-44 -bottom-2 rotate-12 animate-pulse duration-75 w-[320px] xl:w-[400px]">
      <Image
        alt="blue light bulb"
        src={"/light.png"}
        width={380}
        height={320}
        className="w-full h-full "
      />
    </div>
  );
};

export default Bulb;
