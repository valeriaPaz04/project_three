import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const Carrusel = ({ images }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"2"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      modules={[EffectCoverflow]}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carrusel;