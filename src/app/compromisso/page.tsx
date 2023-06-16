import { CompromissoMain } from "@/components/Compromissos/CompromissoMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Compromissos(){
  return(
    <div>
      <TitleHeader title="Compromisso"/>
      <CompromissoMain/>
      <Footer/>
    </div>
  )
}