import { SocialMediaFacebook, SocialMediaInstagram, SocialMediaThreePoints, SocialMediaTwitter, SocialMediaYouTube } from "@/assets/Icons/IconsSocialMedia";

import { IconsUtilLogoWhite } from "@/assets/Icons/IconsUtils";

import BorderColor from '../../../assets/Icons/borderColor.svg'
import Image from "next/image";

export function FooterHome(){
  return(
    <div className="bg-azul-1 pt-20">
      <div className="flex flex-wrap justify-center md:justify-between items-center space-y-8 px-3 md:px-0">
        <div className="text-white text-center sm:text-start space-y-8 w-full sm:max-w-xs mx-auto px-4 flex flex-col items-center sm:items-start">
          <h2 className="text-4xl font-bold">Precisa de informações ou tem sugestões?</h2>

          <p>Cômite Central – Saan Quadra 01 Lote 760, Brasília, DF 70632-100</p>

          <div className="flex gap-9 sm:w-96">
            <SocialMediaInstagram/>
            <SocialMediaFacebook/>
            <SocialMediaYouTube/>
            <SocialMediaThreePoints/>
            <SocialMediaTwitter/>
          </div>
        </div>
        <div className="bg-white p-7 md:p-16 w-full md:w-1/2 rounded-xl md:rounded-l-2xl">
          <div className="max-w-sm space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-laranja-1">Me chame para conversarmos!</h2>
            <form className="flex flex-col w-full space-y-4">
              <input type="text" name="name" id="name" placeholder="Nome" className="border-2 rounded-xl px-4 py-2"/>
              <input type="tel" name="fone" id="fone" placeholder="Telefone" className="border-2 rounded-xl px-4 py-2"/>
              <input type="email" name="email" id="email" placeholder="E-mail" className="border-2 rounded-xl px-4 py-2"/>
              <textarea name="message" id="message" placeholder="Messagem" className="border-2 rounded-xl px-4 py-2"></textarea>

              <button className="bg-azul-1 hover:bg-opacity-95 duration-200 text-white font-semibold text-xl py-2 rounded-xl">Enviar</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 pt-8">
        <IconsUtilLogoWhite/>
        <div className="flex flex-wrap justify-between text-xs text-white py-4">
          <p>© 2023 criado por Klimt Publicidade  |  Todos os direitos reservados</p>
          <p>CNPJ: 47.551.686/0001-72  |  Termos de uso  |  Política de privacidade</p>
        </div>
      </div>
        <Image src={BorderColor} alt="Borda colorida" className="w-full"/>
    </div>
  )
}