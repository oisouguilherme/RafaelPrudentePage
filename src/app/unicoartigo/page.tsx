import { ArtigoBody } from "@/components/ArtigosPage/ArtigoBody";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";

export default function UnicoArtigo(){
  return(
    <div>
      <TitleHeader title="Artigo"/>
      <ArtigoBody/>
      <div className="border-2 max-w-6xl mx-auto mb-16" />
      <UltimasNoticas/>
      <Footer/>
    </div>
  )
}