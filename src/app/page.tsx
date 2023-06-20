"use client";

import { Amigos } from "@/components/HomePage/Amigos";
import { Compromissos } from "@/components/HomePage/Compromissos";
import { FooterHome } from "@/components/HomePage/FooterHome";
import { Main } from "@/components/HomePage/Main";
import { RedesSociais } from "@/components/HomePage/RedesSociais";
import { Trajetoria } from "@/components/HomePage/Trajetoria";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";
import { Animation } from "@/components/Utils/Animations";
import { AnimationMobile } from "@/components/Utils/AnimationsMobile";
import { useEffect, useState } from "react";


export default function Home() {
  const [larguraPagina, setLarguraPagina] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setLarguraPagina(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100">
      {larguraPagina < 700 ? (
        <AnimationMobile/>
      ) : (
        <Animation/>
      )}
      
      <Main/>
      <Trajetoria/>
      <Compromissos/>
      <RedesSociais/>
      <UltimasNoticas/>
      <Amigos/>
      <FooterHome/>
    </div>
    </>
  )
}
