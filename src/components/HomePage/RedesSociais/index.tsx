import Image from "next/image";
import RafaelSocialMedia from "../../../assets/rafael-socialmedia.png";
import Link from "next/link";
import { MsgFacebook, MsgInstagram, MsgPoints, MsgTwitter, MsgWhats, MsgYoutube } from "@/assets/Icons/Icons";
export function RedesSociais() {
  return (
    <div className="flex flex-col lg:flex-row py-12 bg-gray-100">
      <div className="bg-laranja-1 lg:max-w-4xl py-16 px-2 xl:px-20 relative lg:rounded-e-3xl overflow-hidden xl:overflow-visible">
        <div className="text-white rounded-xl border-2 p-10 flex flex-col gap-6 items-center xl:items-start">
          <div className="absolute top-10">
            <MsgWhats/>
          </div>
          <h2 className="text-4xl font-bold">Whatsapp</h2>
          <p className="text-xs text-center xl:w-1/2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </p>
          <a href="#" className="bg-green-500 flex gap-3 py-3 px-6 font-bold rounded-full">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0666504 21.8417C0.251966 21.1611 0.428048 20.5134 0.60545 19.8665C0.918046 18.7229 1.2346 17.5801 1.53796 16.4339C1.56698 16.3251 1.55313 16.176 1.49971 16.0778C0.461682 14.1791 -0.0111688 12.1426 0.193272 9.99664C0.567859 6.06743 2.52125 3.13536 5.98553 1.24198C7.77603 0.263301 9.72019 -0.125136 11.7488 0.0403945C15.2849 0.328589 18.0567 1.97664 20.0312 4.91663C21.4036 6.96037 21.9616 9.24812 21.7604 11.6942C21.5223 14.5913 20.2917 17.0195 18.1201 18.9564C16.5742 20.3354 14.7659 21.1907 12.7248 21.5244C10.3902 21.9056 8.15985 21.5449 6.05016 20.4739C5.86484 20.3802 5.70986 20.371 5.51663 20.4231C3.77296 20.8887 2.0273 21.3464 0.282302 21.8047C0.224927 21.8199 0.165573 21.8258 0.0673099 21.8423L0.0666504 21.8417ZM2.67557 19.2624C2.73295 19.2492 2.76065 19.2439 2.78769 19.2367C3.80329 18.9729 4.82088 18.7144 5.83385 18.4394C6.01455 18.3899 6.1471 18.4209 6.29944 18.5113C8.43618 19.7821 10.7226 20.154 13.1343 19.5565C17.8985 18.3761 20.7949 13.6634 19.7345 8.85111C18.7611 4.43256 14.4863 1.22747 9.63974 1.94763C7.58808 2.25231 5.83451 3.17625 4.42387 4.70295C2.56082 6.719 1.77867 9.11293 2.0484 11.8386C2.18821 13.2532 2.67359 14.5596 3.45377 15.75C3.54873 15.8951 3.56852 16.023 3.52169 16.1892C3.23745 17.1995 2.96245 18.2132 2.67491 19.2617L2.67557 19.2624Z"
                fill="white"
              />
              <path
                d="M5.45471 8.38967C5.47516 7.50332 5.81743 6.77063 6.438 6.15533C6.65366 5.941 6.90492 5.82559 7.21026 5.83284C7.3692 5.8368 7.52945 5.85526 7.68707 5.84273C7.94625 5.82229 8.11507 5.94891 8.20806 6.16522C8.53055 6.91506 8.84974 7.66687 9.14651 8.42726C9.19267 8.54596 9.15838 8.73985 9.08716 8.85196C8.88469 9.1705 8.65321 9.47188 8.41448 9.76535C8.26346 9.95133 8.24829 10.1142 8.37161 10.32C9.25269 11.7933 10.4714 12.8695 12.074 13.5007C12.3265 13.6003 12.4611 13.5726 12.6339 13.3628C12.9036 13.0357 13.17 12.7053 13.4325 12.3723C13.6191 12.1355 13.7293 12.0742 13.9957 12.1962C14.7653 12.5484 15.5277 12.917 16.2848 13.2949C16.3698 13.3378 16.4496 13.4815 16.4536 13.5811C16.4853 14.3969 16.2347 15.0716 15.5072 15.5365C14.6176 16.1056 13.6877 16.1485 12.6998 15.8702C10.145 15.1514 8.25027 13.5508 6.72818 11.4404C6.22961 10.7493 5.77258 10.0384 5.58001 9.19358C5.52 8.92978 5.49626 8.65742 5.45603 8.38901L5.45471 8.38967Z"
                fill="white"
              />
            </svg>
            Whats do Rafael
          </a>
          <Image
            className="xl:absolute bottom-0 right-4 xl:w-96 -mb-24 xl:mb-0"
            src={RafaelSocialMedia}
            alt="Rafael com celular na mão apontando para seu contato no Whats"
          />
        </div>
      </div>

      <div className="lg:max-w-md flex flex-col gap-8 items-center text-center lg:text-start justify-center p-12 z-10">
        <h2 className="text-4xl font-bold">Me acompanhe nas redes sociais</h2>
        <div className="flex pl-2">
          <Link href={"#"} >
            <MsgInstagram/>
          </Link>
          <Link href={"#"}>
            <MsgFacebook/>
          </Link>
          <Link href={"#"}>
            <MsgYoutube/>
          </Link>
          <Link href={"#"}>
            <MsgPoints/>
          </Link>
          <Link href={"#"}>
            <MsgTwitter/>
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
