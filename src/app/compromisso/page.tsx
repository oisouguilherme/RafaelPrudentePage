"use client"

import { CompromissoMain } from "@/components/Compromissos/CompromissoMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";


import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Compromissos(){
  useEffect(() => {
    AOS.init();
  }, [])

  return(
    <div>
      <TitleHeader title="Compromisso"/>
      <CompromissoMain/>
      <Footer/>
    </div>
  )
}