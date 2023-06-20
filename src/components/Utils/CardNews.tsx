import Link from 'next/link';
import Rafael from '../../assets/rafael.png'
import Image from "next/image";

export function CardNews({title,paragraph}:any){
  return(
    <div data-aos="zoom-in" className='sm:w-80 bg-white rounded-xl'>
      <Link href={"/noticias/unicanoticia"}>
        <Image src={Rafael} alt='Imagem da noticia' className='w-full'/>
        <div className='p-6 space-y-4'>
          <p className='font-semibold'>{title}</p>
          <p>{paragraph}</p>
        </div>
      </Link>
    </div>
  )
}