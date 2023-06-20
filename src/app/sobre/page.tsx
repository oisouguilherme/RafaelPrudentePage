"use client"
import { Footer } from "@/components/Footer";
import { SlideCompleto } from "@/components/HomePage/Trajetoria/SlideCompleto";
import { Main } from "@/components/SobrePage/Main";
import Aos from "aos";
import { useEffect } from "react";

export default function Sobre(){
  useEffect(() => {
    Aos.init();
  }, [])
  return(
    <>
      <Main/>
      <SlideCompleto/>
      <Footer/>
    </>
  )
}