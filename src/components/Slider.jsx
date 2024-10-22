import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../css/Slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const imageFile = [
    { id: 1, img: "/src/assets/image/setor/p1.jpeg" },
    { id: 2, img: "/src/assets/image/setor/p2.jpeg" },
    { id: 3, img: "/src/assets/image/setor/p3.jpeg" },
    { id: 4, img: "/src/assets/image/setor/p4.jpeg" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {/* {imageFile.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt="" />
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <img src={imageFile[0].img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imageFile[1].img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imageFile[2].img} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imageFile[3].img} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
