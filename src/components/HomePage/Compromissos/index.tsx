import IconTrabalho from '../../../assets/Icons/trabalho.svg'
import IconSeguranca from '../../../assets/Icons/seguranca.svg'
import IconImpostos from '../../../assets/Icons/impostos.svg'
import IconEconomia from '../../../assets/Icons/economia.svg'
import IconSocial from '../../../assets/Icons/social.svg'
import IconBorder from '../../../assets/Icons/borderColor.svg'
import IconSmile from '../../../assets/Icons/msgSmile.svg'
import Image from 'next/image'
import Link from 'next/link'

export function Compromissos(){
  return (
    <div className='py-16'>
      <h2 className='text-laranja-1 text-4xl md:text-6xl font-bold pb-16'>Compromissos</h2>
      <div className='flex flex-col md:flex-row gap-12'>
        <div className='md:space-y-4 flex md:flex-col'>
          <button className='flex items-center gap-6 w-fit md:w-64 h-16 md:h-20 bg-laranja-1 px-2 sm:p-8 rounded-2xl text-xl text-white font-bold'>
            <Image src={IconTrabalho} alt='trabalho' className='max-w-xs'/>
            <p className='hidden md:block'>Trabalho</p>
          </button>
          <button className='flex items-center gap-6 w-fit md:w-64 h-16 md:h-20 border-2 px-2 sm:p-8 rounded-2xl text-xl font-bold active:bg-laranja-1 active:text-white'>
            <Image src={IconSeguranca} alt='trabalho' className='max-w-xs'/>
            <p className='hidden md:block'>Segurança Pública</p>
          </button>
          <button className='flex items-center gap-6 w-fit md:w-64 h-16 md:h-20 border-2 px-2 sm:p-8 rounded-2xl text-xl font-bold active:bg-laranja-1 active:text-white'>
            <Image src={IconImpostos} alt='trabalho' className='max-w-xs'/>
            <p className='hidden md:block'>Impostos</p>
          </button>
          <button className='flex items-center gap-6 w-fit md:w-64 h-16 md:h-20 border-2 px-2 sm:p-8 rounded-2xl text-xl font-bold active:bg-laranja-1 active:text-white'>
            <Image src={IconEconomia} alt='trabalho' className='max-w-xs'/>
            <p className='hidden md:block'>Economia</p>
          </button>
          <button className='flex items-center gap-6 w-fit md:w-64 h-16 md:h-20 border-2 px-2 sm:p-8 rounded-2xl text-xl font-bold active:bg-laranja-1 active:text-white'>
            <Image src={IconSocial} alt='trabalho' className='max-w-xs'/>
            <p className='hidden md:block'>Social</p>
          </button>
        </div>

        <div className='bg-white p-8 sm:p-16 rounded-2xl w-full flex flex-col justify-between items-start relative overflow-hidden lg:overflow-visible'>
          <div className='max-w-2xl flex flex-col items-start space-y-8'>
            <div>
              <p className='font-bold'>Criação do RENOVA BRASIL</p>
              <p>Ampliação do Programa RenovaDF de qualificação profissional aqui no Distrito Federal e criação de um programa para todo o país.Três meses de curso remunerado mais três meses de trabalho experimental em empresas do mercado com salários pagos pelo Governo Federal</p>
            </div>
            <div>
              <p className='font-bold'>CRIAÇÃO DO MINISTÉRIO DO EMPREGO E QUALIFICAÇÃO PROFISSIONAL</p>
              <p>O Novo Ministério teria como meta reduzir o desemprego no país e promover programas para qualificar nossos trabalhadores.</p>
            </div>
            <Link href="#" className='py-3 px-8 border-2 text-laranja-1 rounded-full font-bold'>Veja mais</Link>
          </div>

          
          <Image src={IconBorder} alt='borda-colorida' className='absolute bottom-0 right-0 w-full rounded-b-2xl'/>
          <Image src={IconSmile} alt='borda-colorida' className='absolute -right-9'/>
        </div>
      </div>
    </div>
  );
}