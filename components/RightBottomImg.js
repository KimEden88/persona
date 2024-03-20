import Image from "next/image";

const RightBottomImg = () => {
  return (
    <div className="absolute right-0 bottom-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-40 translate rotate-180">
      <Image
        src="/right-bottom-img.png"
        width={400}
        height={400}
        alt="color splash"
      />
    </div>
  );
};

export default RightBottomImg;
