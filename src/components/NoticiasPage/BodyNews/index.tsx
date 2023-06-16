import { BlueFacebook, BlueLinkedIn, BlueTelegram, BlueTwitter, BlueWhatsapp } from "@/assets/Icons/IconsSocialMedia";
import Image from "next/image";
import Link from "next/link";

import ImageNotice from '../../../assets/notice.png'

export function BodyNews() {
  return (
    <div className="max-w-3xl mx-auto py-11 space-y-5 px-4">
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-sm">Publicado em 16/12/2022 16h30</p>
        <ul className="flex gap-4">
          <li>
            <Link href={""}>
              <BlueFacebook/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTwitter/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueWhatsapp/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTelegram/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueLinkedIn/>
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="font-bold text-3xl sm:text-5xl">
        Rafael Prudente garante aluguel social às mulheres vítimas de violência
        doméstica
      </h2>
      <p className="font-bold text-xl text-laranja-1">
        Rafael Prudente está deixando a Casa em direção ao Congresso Nacional
      </p>
      <div>
        <Image src={ImageNotice} alt="Imagem da noticia" className="w-full"/>
        <p className="text-xs sm:text-sm">
          Prudente também é o autor da lei que assegura aos passageiros de
          ônibus o direito de desembarcarem fora das paradas de ônibus entre 21h
          e 6h
        </p>
      </div>

      <p>
        Presidente da Câmara Legislativa no período 2019-2022, o deputado Rafael
        Prudente (MDB) está deixando a Casa em direção ao Congresso Nacional,
        onde ocupará, a partir de 1º de janeiro próximo, uma vaga na Câmara dos
        Deputados. Em seus dois mandatos consecutivos no Legislativo local, viu
        aprovadas diversas proposições de sua autoria, transformadas em leis,
        que beneficiam a população do Distrito Federal em diferentes setores. A
        Lei nº 6.323/2020, de iniciativa do parlamentar, garante a concessão de
        aluguel social às mulheres vítimas de violência doméstica. A importância
        da medida, na análise de Prudente, reside na garantia, proporcionada
        pela norma, de condições financeiras às vítimas para se afastarem de
        seus agressores e se estabelecerem em outro local, “com mais dignidade e
        segurança”. Consta da lei que o benefício poderá ser concedido por 12
        meses, com a utilização de recursos previstos no Orçamento do DF
        destinados ao aluguel social, podendo ser prorrogado uma única vez por
        igual período, mediante avaliação dos órgãos do Governo do Distrito
        Federal responsáveis pelo benefício.
      </p>

      <h3 className="font-bold">Transporte público</h3>
      <p>
        Já a Lei nº 7.140/2022, de autoria de Prudente, assegura aos passageiros
        de ônibus do Distrito Federal o direito de desembarcarem fora das
        paradas de ônibus, no período das 21 horas até as 6 horas do dia
        seguinte. A lei altera legislação anterior, que previa esse direito
        apenas a partir das 23 horas. “O período noturno é o mais perigoso e
        coloca os usuários do transporte público em situação de
        vulnerabilidade”, afirma o distrital, ao avaliar a regulamentação da
        parada livre para usuários do transporte público. A lei, contudo, não
        permite parar em viadutos, pontes e túneis. Além disso, os ônibus
        somente poderão fazer o desembarque de passageiros nos locais em que não
        seja proibida a parada e onde haja espaço suficiente para o correto
        acostamento do veículo.
      </p>

      <h3 className="font-bold">Saúde pública</h3>
      <p>
        Outra lei do deputado Rafael Prudente determina que, em até 30 dias, a
        rede pública de saúde realize exames que estejam relacionados a casos de
        câncer. De acordo com a norma, a Secretaria de Saúde do Distrito Federal
        precisa respeitar esse prazo máximo, a partir da data do agendamento. O
        atendimento compreende os diagnósticos e procedimentos para recuperação
        da saúde de pacientes identificados com esse conjunto de doenças, de
        acordo com o que prevê a Lei nº 6.389/2019.
      </p>

      <ul className="flex justify-end gap-4 pt-24">
          <li>
            <Link href={""}>
              <BlueFacebook/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTwitter/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueWhatsapp/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueTelegram/>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <BlueLinkedIn/>
            </Link>
          </li>
        </ul>
    </div>
  );
}
