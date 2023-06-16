import Image from 'next/image'
import IconBaixar from '../../../assets/Icons/baixar.svg'
export function ProjetosPrincipais(){
  return(
    <div className='max-w-[265px] bg-white rounded-2xl py-10 px-7 space-y-4'>
      <h2 className='text-2xl font-bold'>Lei 0000/0000</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis fermentum mattis. </p>
      <button className='bg-laranja-1 text-white font-semibold flex items-center gap-2 py-2 px-4 rounded-full text-xs'>Baixe <Image src={IconBaixar} alt='Icone de download'/></button>
    </div>
  )
}