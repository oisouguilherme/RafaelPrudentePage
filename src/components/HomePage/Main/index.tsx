import Image from "next/image";
import MainBanner from '../../../assets/bannerMain.png'
import MainBannerMobile from '../../../assets/mainBannerMobile.png'
import Mission from '../../../assets/mission.png'
import MissionMobile from '../../../assets/missionMobile.png'
import './estilo.css'
import Link from "next/link";

import { IconsUtilThreeHearts } from "@/assets/Icons/IconsUtils";


export function Main(){
  return(
    <div className="flex flex-col items-center relative -z-0">
      <div className="bg-image w-full h-screen overflow-scroll scroll-hidden">
        <div className="w-full h-screen">

        </div>
        <Image src={MainBanner} alt="Banner" className="w-full hidden sm:block"/>
        <Image src={MainBannerMobile} alt="Banner" className="w-full sm:hidden"/>

      </div>

      <p className="text-laranja-1 text-xl text-center uppercase py-8 sm:py-20">Pai de família, cristão e trabalhador incansável</p>

      <Image src={Mission} alt="Missoes" className="hidden sm:block px-4"/>
      <Image src={MissionMobile} alt="Banner" className="w-full sm:hidden px-4"/>

      <div className="flex flex-col items-center lg:flex-row gap-4 mx-auto max-w-6xl px-4 py-8">
        <div className="max-w-lg flex items-start flex-col space-y-5 text-white">
          <h2 className="font-bold text-6xl">Rafael Prudente</h2>
          <p className="text-sm">Nascido em Brasília, é filho de pai goiano e mãe pernambucana, é casado com Pollyanna Vaz Prudente e tem dois filhos, Rafael e Samuel. Formado em Administração de Empresas, iniciou cedo a sua vida profissional. Eleito em 2014, Rafael Prudente está no segundo mandato de Deputado Distrital. O Deputado é o atual Presidente da Câmara Legislativa do Distrito Federal e está no comando do Poder Legislativo do DF desde 2018. RAFAEL PRUDENTE também é o presidente do MDB-DF.</p>

          <Link href="#" className="border-2 border-white py-2 px-6 rounded-full hover:scale-105 duration-300">Veja mais</Link>
        </div>
        <div className="flex w-full flex-col gap-16 items-end">
          <iframe className="w-full sm:w-[600px] xl:w-[659px] h-64 md:h-[370px]" src="https://www.youtube.com/embed/cyyMZnx8nAU" title="Monitoramento do uso de EPI&#39;s com Visão Computacional" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <div className="hidden lg:block">
            <IconsUtilThreeHearts/>
          </div>
        </div>

        <div className="absolute bg-laranja-1 w-full h-1/3 bottom-64 left-0 lg:w-1/2 lg:h-1/3 lg:bottom-0 lg:left-0 -z-10"/>

      </div>
    </div>
  )
}