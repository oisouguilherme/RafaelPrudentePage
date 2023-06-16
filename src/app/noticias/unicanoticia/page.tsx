import { Footer } from "@/components/Footer";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";
import { BodyNews } from "@/components/NoticiasPage/BodyNews";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function UnicaNoticia(){
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Notícias"/>
      <BodyNews/>
      <div className="border-2 max-w-6xl mx-auto mb-16">

      </div>
      <UltimasNoticas/>
      <Footer/>
    </div>
  )
}