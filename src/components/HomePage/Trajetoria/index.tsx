"use client";

import Image from "next/image";
import Rafael from "../../../assets/rafael.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard } from "./SlideCard";
import Abraco from '../../../assets/abraco.png'

export function Trajetoria() {
  return (
    <div className="py-20 ">
      <h2 className="text-laranja-1 text-6xl font-bold pb-12">Trajetória</h2>
      <div className="flex">
        <Swiper
          spaceBetween={200}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideCard
              image={Rafael}
              year={"2015"}
              text={
                "Tomou posse no dia 1º de janeiro para seu primeiro mandato na Câmara Legislativa do DF."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              image={Rafael}
              year={"2015"}
              text={
                "Filiou-se ao MDB para disputar a eleição. Em outubro foi Deputado Distrital com 17 mil 581 votos."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              image={Rafael}
              year={"2015 e 2016"}
              text={
                "Membro das Comissões de Economia, Orçamento e de Finanças (CEOF); de Educação, Saúde e Cultura (CESC) e de Fiscalização, Governança, Transparência e Controle (CFGTC) e suplente da Comissões de Constituição e Justiça (CCJ) e de Segurança (CS)."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              image={Rafael}
              year={"2016"}
              text={
                "Membro titular da Comissão Parlamentar de Inquérito – CPI, que investigou o sistema de transporte público do DF."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              image={Rafael}
              year={"2016"}
              text={
                "Membro titular da Comissão Parlamentar de Inquérito – CPI, que investigou o sistema de transporte público do DF."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Image src={Abraco} alt="Rafael Prudente abraçando o povo"/>
    </div>
  );
}
