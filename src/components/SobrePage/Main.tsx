import Image from "next/image";
import SobreImage from "../../assets/sobreImage.png";
import { MsgSmile } from "@/assets/Icons/IconsMsg";
import { TitleHeader } from "../Utils/TitleHeader";

export function Main() {
  return (
    <div>
      <TitleHeader title="Sobre" />
      <div className="flex gap-8 flex-wrap justify-center lg:justify-between mx-auto max-w-6xl px-4 pt-16">
        <div className="max-w-md relative" data-aos="fade-right">
          <Image src={SobreImage} alt="Imagem de rafael" />
          <div className="absolute bottom-48 -right-9 hidden md:block">
            <MsgSmile />
          </div>
        </div>
        <div className="max-w-lg space-y-4" data-aos="fade-left">
          <p>
            Nascido em Brasília, é filho de pai goiano e mãe pernambucana, é
            casado com Pollyanna Vaz Prudente e tem dois filhos, Rafael e
            Samuel. Formado em Administração de Empresas, iniciou cedo a sua
            vida profissional. Eleito em 2014, Rafael Prudente está no segundo
            mandato de Deputado Distrital. O Deputado é o atual Presidente da
            Câmara Legislativa do Distrito Federal e está no comando do Poder
            Legislativo do DF desde 2018. RAFAEL PRUDENTE também é o presidente
            do MDB-DF.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.nto electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
