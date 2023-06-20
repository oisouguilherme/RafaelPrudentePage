import Image from "next/image";
import FotoCompromisso from "../../assets/compromisso.png";
import { CompromissoCard } from "./CompromissoCard";
import {
  IconsUtilEconomia,
  IconsUtilImposto,
  IconsUtilSeguranca,
  IconsUtilSocial,
  IconsUtilTrabalho,
} from "@/assets/Icons/IconsUtils";

export function CompromissoMain() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 md:px-0">
      <div className="relative" data-aos="zoom-in-left">
        <p className="absolute max-w-md top-20 left-16 text-white hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis
          fermentum mattis. Nullam quis nisi mauris. In viverra lectus sed nulla
          pharetra porta. Sed eu mollis nisi. Mauris ex lectus, congue at risus
          nec, interdum egestas velit.
        </p>
        <Image src={FotoCompromisso} alt="" className="w-full" />
      </div>
      <div className="flex flex-wrap gap-7 justify-center py-8 md:py-14">
        <CompromissoCard
          style="bg-laranja-1 text-white border-none"
          styleButton="border-white text-white"
          title="Trabalho"
        >
          <IconsUtilTrabalho />
        </CompromissoCard>
        <CompromissoCard title="Segurança Pública">
          <IconsUtilImposto />
        </CompromissoCard>
        <CompromissoCard title="Impostos">
          <IconsUtilEconomia />
        </CompromissoCard>
        <CompromissoCard title="Economia">
          <IconsUtilSocial />
        </CompromissoCard>
        <CompromissoCard title="Social">
          <IconsUtilSeguranca />
        </CompromissoCard>
        <div className="w-[355px] h-[339px] p-9 space-y-4 hidden md:block">
          <h2 className="font-bold text-azul-1 text-xl">E mais</h2>
          <ul className="list-outside">
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
            <li>- Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
