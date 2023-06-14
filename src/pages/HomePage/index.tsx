import { Compromissos } from "@/components/HomePage/Compromissos";
import { Main } from "@/components/HomePage/Main";
import { RedesSociais } from "@/components/HomePage/RedesSociais";
import { Trajetoria } from "@/components/HomePage/Trajetoria";


export function HomePage(){

  return(
    <div className="bg-gray-100">
      <Main/>
      <div className="container mx-auto max-w-6xl px-4">
        <Trajetoria/>
        <Compromissos/>
      </div>
      <RedesSociais/>
    </div>
  )
}