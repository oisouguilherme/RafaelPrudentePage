import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { MsgAmigos } from "@/assets/Icons/IconsMsg";
import { CardAmigos } from "./CardAmigos";

export function Amigos() {
  return (
    <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-20">
      <div className="flex gap-4 flex-wrap items-center md:justify-between">
        <h2 className="text-laranja-1 text-4xl md:text-6xl font-bold">Amigos</h2>
        <p className="max-w-lg text-sm">
          Ted by the readable content of a page when looking at its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution
        </p>
        <MsgAmigos />
      </div>
      <div>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 300,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            648: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            930: {
              slidesPerView: 4,
              spaceBetween: 300,
            },
          }}
        >
          <SwiperSlide>
            <CardAmigos />
          </SwiperSlide>
          <SwiperSlide>
            <CardAmigos />
          </SwiperSlide>
          <SwiperSlide>
            <CardAmigos />
          </SwiperSlide>
          <SwiperSlide>
            <CardAmigos />
          </SwiperSlide>
          <SwiperSlide>
            <CardAmigos />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
