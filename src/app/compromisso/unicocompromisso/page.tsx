import { Footer } from "@/components/Footer";
import { ProjetosPrincipais } from "@/components/UnicoCompromisso/ProjetosPrincipais";
import { UnicoCompromissoMain } from "@/components/UnicoCompromisso/UnicoCompromissoMain";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Unicocompromisso(){
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Trabalho" />
      <UnicoCompromissoMain/>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 px-4 pb-20">
        <ProjetosPrincipais/>
        <ProjetosPrincipais/>
        <ProjetosPrincipais/>
        <ProjetosPrincipais/>
      </div>
      <Footer/>
    </div>
  )
}