import { ContatoPageMain } from "@/components/ContatoPage/ContatoPageMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Contato(){
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Contato"/>
      <ContatoPageMain/>
      <Footer/>
    </div>
  )
}