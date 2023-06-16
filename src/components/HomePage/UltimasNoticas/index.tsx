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
        <CardNews />
        <CardNews />
        <CardNews />
      </div>
      <Link
        href={""}
        className="text-laranja-1 text-lg font-bold py-4 px-20 sm:px-32 border-2 rounded-full"
      >
        Mais notícias
      </Link>
    </div>
  );
}
