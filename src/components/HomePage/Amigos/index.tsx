import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { MsgAmigos } from "@/assets/Icons/IconsMsg";
import { CardAmigos } from "./CardAmigos";

export function Amigos() {
  return (
    <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-20">
      <div className="flex gap-4 flex-wrap items-center md:justify-between">
        <h2 className="text-laranja-1 text-4xl md:text-6xl font-bold">
          Amigos
        </h2>
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
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 300,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 300,
            },
            930: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="-z-10">
            <CardAmigos
              name="João da Silva"
              cargo="Deputado "
              sobre=" Ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
            />
          </SwiperSlide>
          <SwiperSlide className="-z-10">
            <CardAmigos
              name="Miguel Oliveira"
              cargo="Líder comunitário "
              sobre=" Ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
            />
          </SwiperSlide>
          <SwiperSlide className="-z-10">
            <CardAmigos
              name="Maria da Aparecida"
              cargo="Deputada "
              sobre=" Ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
            />
          </SwiperSlide>
          <SwiperSlide className="-z-10">
            <CardAmigos
              name="Antônio Santos "
              cargo="Secretário "
              sobre=" Ted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
