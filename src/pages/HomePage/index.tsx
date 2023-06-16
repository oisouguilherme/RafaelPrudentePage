"use client";

import { Amigos } from "@/components/HomePage/Amigos";
import { Compromissos } from "@/components/HomePage/Compromissos";
import { FooterHome } from "@/components/HomePage/FooterHome";
import { Main } from "@/components/HomePage/Main";
import { RedesSociais } from "@/components/HomePage/RedesSociais";
import { Trajetoria } from "@/components/HomePage/Trajetoria";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";


export default function HomePage(){

  return(
    <div className="bg-gray-100">
      <Main/>
      <Trajetoria/>
      <Compromissos/>
      <RedesSociais/>
      <UltimasNoticas/>
      <Amigos/>
      <FooterHome/>
    </div>
  )
}