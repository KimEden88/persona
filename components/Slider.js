// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Custom Website Development",
    description:
      "Transform your vision into reality with custom, responsive websites designed with the latest HTML, CSS, and JavaScript techniques.",
  },
  {
    icon: <RxPencil2 />,
    title: "React Application Development",
    description:
      "Leverage the power of React to build dynamic, fast, and scalable single-page applications tailored to your needs.",
  },
  {
    icon: <RxDesktop />,
    title: "Responsive Web Design",
    description:
      "websites that offer seamless experiences across all devices, utilizing cutting-edge CSS frameworks for flawless design on any screen size.",
  },
  {
    icon: <RxReader />,
    title: "UI/UX Design",
    description:
      "Enhance user experience through expert UI/UX consultations, focusing on wireframing, color schemes, and modern design best practices.",
  },
  {
    icon: <RxRocket />,
    title: "Maintenance and Updates",
    description:
      "Keep your website at peak performance with regular maintenance and updates, ensuring it stays secure, functional, and ahead of technological advancements.",
  },
];

const Slider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,90,119,0.20)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(65,90,119,0.40)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title, description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
