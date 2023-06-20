"use client";

import Image from "next/image";
import "swiper/css";
import Abraco from '../../../assets/abraco.png'
import AbracoMobile from '../../../assets/abracoMobile.png'
import { SlideCompleto } from "./SlideCompleto";

export function Trajetoria() {
  return (
    <div className="pb-20 mx-auto max-w-6xl">
      <SlideCompleto/>
      <div data-aos="fade-up" className="px-4">
        <Image src={Abraco} alt="Rafael Prudente abraçando o povo" className="hidden sm:block"/>
        <Image src={AbracoMobile} alt="Rafael Prudente abraçando o povo" className=" sm:hidden w-full"/>
      </div>
    </div>
  );
}
