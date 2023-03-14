import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { styles } from "./swiper.module.css";

SwiperCore.use([Navigation, Pagination]);

const videos = [
  {
    id: "video1",
    name: "Video 1",
    description: "Description for video 1",
    url: "https://youtu.be/rYEDA3JcQqw",
  },
  {
    id: "video2",
    name: "Video 2",
    description: "Description for video 2",
    url: "https://youtu.be/rYEDA3JcQqw",
  },
  {
    id: "video3",
    name: "Video 3",
    description: "Description for video 3",
    url: "https://youtu.be/rYEDA3JcQqw",
  },
];

const SwiperComponent = () => {
  const [swiper, setSwiper] = React.useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={setSwiper}
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3>{video.name}</h3>
              <p>{video.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-buttons">
        <button onClick={goPrev} className="swiper-button-prev">
          Prev
        </button>
        <button onClick={goNext} className="swiper-button-next">
          Next
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
