import { IconsUtilTrabalho } from "@/assets/Icons/IconsUtils";
import Link from "next/link";

export function CompromissoCard() {
  return (
    <div className="max-w-[355px] h-[339px] bg-laranja-1  shadow-md shadow-laranja-1 text-white p-6 sm:p-8 rounded-xl space-y-6 flex flex-col items-start">
      <div className="flex gap-4">
        <IconsUtilTrabalho />
        <h2 className="font-bold text-xl">Trabalho</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis
        fermentum mattis. Nullam quis nisi mauris. In viverra lectus sed nulla
        pharetra porta.
      </p>

      <Link className="border-2 px-6 py-1 rounded-full text-xs font-bold" href={""}>Veja mais</Link>
    </div>
  );
}
