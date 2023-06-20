import { ArtigoMain } from "@/components/ArtigosPage/ArtigoMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Artigos(){
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Artigos" />
      <ArtigoMain/>
      <Footer/>
    </div>
  )
}