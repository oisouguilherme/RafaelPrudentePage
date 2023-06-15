import Rafael from '../../../../assets/rafael.png'
import Image from "next/image";

export function CardNews(){
  return(
    <div className='sm:w-80 bg-white rounded-xl'>
      <Image src={Rafael} alt='Imagem da noticia' className='w-full'/>
      <div className='p-6 space-y-4'>
        <p className='font-semibold'>Projeto de Rafael Prudente proíbe a apreensão de CNH e passaporte de pessoas com dívidas</p>
        <p>O deputado Federal Rafael Prudente do MDB-DF, protocolou nesta segunda-feira (27), projeto de Lei que proíbe a apreensão pelo...</p>
      </div>
    </div>
  )
}