import { Compromissos } from "@/components/HomePage/Compromissos";
import { Main } from "@/components/HomePage/Main";
import { RedesSociais } from "@/components/HomePage/RedesSociais";
import { Trajetoria } from "@/components/HomePage/Trajetoria";


export function HomePage(){

  return(
    <div>
      <Main/>
      <div className="px-2 md:px-24 lg:px-36 bg-gray-100">
        <Trajetoria/>
        <Compromissos/>
      </div>
      <RedesSociais/>
    </div>
  )
}