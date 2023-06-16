import Image from "next/image";
import Amigo from "../../../../assets/amigo.png";

export function CardAmigos({ name, cargo, sobre }: any) {
  return (
    <div className="pt-20">
      <div className="w-80 h-[369px] bg-white px-10 pt-16 space-y-5 rounded-xl relative">
        <div className="rounded-full border-4 absolute -top-20">
          <Image
            src={Amigo}
            alt="Imagem de "
            className="rounded-full p-1 w-36"
          />
        </div>

        <div>
          <p className="font-semibold text-laranja-1 text-2xl">{name}</p>
          <p className="font-semibold">{cargo}</p>
        </div>
        <p>{sobre}</p>
      </div>
    </div>
  );
}
