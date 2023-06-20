"use client"

import { ArtigoMain } from "@/components/ArtigosPage/ArtigoMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Artigos(){
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Artigos" />
      <ArtigoMain/>
      <Footer/>
    </div>
  )
}