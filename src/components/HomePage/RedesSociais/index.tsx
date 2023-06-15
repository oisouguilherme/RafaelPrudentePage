import Image from "next/image";
import RafaelSocialMedia from "../../../assets/rafael-socialmedia.png";

import Link from "next/link";

import {
  MsgFacebook,
  MsgInstagram,
  MsgPoints,
  MsgTwitter,
  MsgWhats,
  MsgYoutube,
} from "@/assets/Icons/IconsMsg";
import { SocialMediaWhatsappTransparent } from "@/assets/Icons/IconsSocialMedia";

export function RedesSociais() {
  return (
    <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row pb-20 bg-gray-100">
      <div className="bg-laranja-1 lg:max-w-4xl py-16 px-2 xl:px-20 relative lg:rounded-e-3xl overflow-hidden xl:overflow-visible">
        <div className="text-white rounded-xl border-2 p-10 flex flex-col gap-6 items-center xl:items-start">
          <div className="absolute top-10">
            <MsgWhats />
          </div>
          <h2 className="text-4xl font-bold">Whatsapp</h2>
          <p className="text-xs text-center xl:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
          <a
            href="#"
            className="bg-green-500 flex gap-3 py-3 px-6 font-bold rounded-full"
          >
            <SocialMediaWhatsappTransparent/>
            Whats do Rafael
          </a>
          <Image
            className="xl:absolute bottom-0 right-4 xl:w-96 -mb-28 xl:mb-0"
            src={RafaelSocialMedia}
            alt="Rafael com celular na mão apontando para seu contato no Whats"
          />
        </div>
      </div>

      <div className="lg:max-w-md flex flex-col gap-8 items-center text-center lg:text-start justify-center sm:p-12 z-10">
        <h2 className="text-4xl font-bold">Me acompanhe nas redes sociais</h2>
        <div className="flex lg:-ml-16">
          <Link href={"#"} className="w-12 sm:w-20 lg:w-24">
            <MsgInstagram />
          </Link>
          <Link href={"#"} className="w-12 sm:w-20 lg:w-24" >
            <MsgFacebook />
          </Link>
          <Link href={"#"} className="w-12 sm:w-20 lg:w-24">
            <MsgYoutube />
          </Link>
          <Link href={"#"} className="w-12 sm:w-20 lg:w-24">
            <MsgPoints />
          </Link>
          <Link href={"#"} className="w-12 sm:w-20 lg:w-24">
            <MsgTwitter />
          </Link>
        </div>
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
      </div>
    </div>
  );
}
