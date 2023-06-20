"use client"
import { Footer } from "@/components/Footer";
import { SlideCompleto } from "@/components/HomePage/Trajetoria/SlideCompleto";
import { Main } from "@/components/SobrePage/Main";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sobre(){
  useEffect(() => {
    AOS.init();
  }, []);

  return(
    <>
      <Main/>
      <SlideCompleto/>
      <Footer/>
    </>
  )
}