"use client"
import { Footer } from "@/components/Footer";
import { Main } from "@/components/NoticiasPage/Main";
import { TitleHeader } from "@/components/Utils/TitleHeader";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Noticias(){
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <>
      <TitleHeader title="Notícias" />
      <Main/>
      <Footer/>
    </>
  )
}