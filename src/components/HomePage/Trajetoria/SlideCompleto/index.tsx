import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideCard } from "../SlideCard";
import Rafael from "../../../../assets/rafael.png";

export function SlideCompleto(){
  return(
    <div className="py-20 mx-auto max-w-6xl px-4">
      <h2 className="text-laranja-1 text-4xl md:text-6xl font-bold pb-12">Trajetória</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 300,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
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
              year={"2016"}
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
              year={"2017"}
              text={
                "Membro titular da Comissão Parlamentar de Inquérito – CPI, que investigou o sistema de transporte público do DF."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}