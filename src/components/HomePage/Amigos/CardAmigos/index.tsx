import Image from "next/image";
import Amigo from '../../../../assets/amigo.png'
export function CardAmigos() {
  return (
    <div className="w-80 h-[369px] bg-white p-10 space-y-5 rounded-xl relative">
      <div className="rounded-full border-4 w-fit absolute -top-20">
        <Image src={Amigo} alt="Imagem de " className="rounded-full p-1"/>
      </div>

      <div>
        <p className="font-semibold text-laranja-1 text-2xl">João da Silva</p>
        <p className="font-semibold">Deputado</p>
      </div>
      <p>
        Ted by the readable content of a page when looking at its layout. The
        point of using Lorem Ipsum is that it has a more-or-less normal
        distribution
      </p>
    </div>
  );
}
