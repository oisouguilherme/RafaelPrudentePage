import { MsgNoticias } from "@/assets/Icons/IconsMsg";
import { CardNews } from "../../Utils/CardNews";

import Link from "next/link";

export function UltimasNoticas() {
  return (
    <div className="container mx-auto max-w-6xl px-4 flex flex-col items-center gap-16 pb-20">
      <div className="flex w-full justify-between items-center">
        <h2 className="text-laranja-1 text-4xl md:text-6xl font-bold">
          Últimas Notícias
        </h2>
        <MsgNoticias />
      </div>
      <div className="flex gap-8 w-full justify-around flex-wrap">
        <CardNews
          title="Projeto de Rafael Prudente proíbe a apreensão de CNH e passaporte de pessoas com dívidas"
          paragraph="O deputado Federal Rafael Prudente do MDB-DF, protocolou nesta segunda-feira (27), projeto de Lei que proíbe a apreensão pelo..."
        />
        <CardNews
          title="Rafael Prudente faz um apelo ao STF e pede a volta do Governador Ibaneis Rocha"
          paragraph="O Deputado Federal Rafael Prudente do MD-DF, usou a tribuna da Câmara dos Deputados nesta quinta-feira (02), para..."
        />
        <CardNews
          title="Rafael Prudente faz um apelo ao STF e pede a volta do Governador Ibaneis Rocha"
          paragraph="O deputado Federal Rafael Prudente do MDB-DF, apresentou projeto de Lei que Institui o “Programa Médico Solidário”..."
        />
      </div>
      <Link
        href={""}
        className="text-laranja-1 text-lg font-bold py-4 px-20 sm:px-32 border-2 rounded-full hover:scale-105 duration-300"
      >
        Mais notícias
      </Link>
    </div>
  );
}
