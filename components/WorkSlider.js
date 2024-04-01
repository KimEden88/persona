// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Images
import rick1 from "@/public/rick-1.png";
import rick2 from "@/public/rick-2.png";
import rick3 from "@/public/rick-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
// icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="w-[500px] h-[500px] p-[50px]"
      >
        <SwiperSlide className="bg-center bg-cover w-[500px] h-[500px]">
          <Image
            alt="rick-2"
            width={500}
            height={500}
            className="block w-full"
            src={rick2}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[500px] h-[500px]">
          <Image
            alt="rick-1"
            width={500}
            height={500}
            className="block w-full"
            src={rick1}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover w-[500px] h-[500px]">
          <Image
            alt="rick-3"
            width={500}
            height={500}
            className="block w-full"
            src={rick3}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default WorkSlider;
