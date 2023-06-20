"use client";

import { Amigos } from "@/components/HomePage/Amigos";
import { Compromissos } from "@/components/HomePage/Compromissos";
import { FooterHome } from "@/components/HomePage/FooterHome";
import { Main } from "@/components/HomePage/Main";
import { RedesSociais } from "@/components/HomePage/RedesSociais";
import { Trajetoria } from "@/components/HomePage/Trajetoria";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";
import { Animation } from "@/components/Utils/Animations";


export default function Home() {
  return (
    <>
      <div className="bg-gray-100">
      <Animation/>
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
