import {
  SocialMediaFacebook,
  SocialMediaInstagram,
  SocialMediaThreePoints,
  SocialMediaTwitter,
  SocialMediaYouTube,
} from "@/assets/Icons/IconsSocialMedia";
import { IconsUtilLogoWhite } from "@/assets/Icons/IconsUtils";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-azul-1 text-white py-11 space-y-6 px-4">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto space-y-4">
        <IconsUtilLogoWhite />
        <p>Cômite Central – Saan Quadra 01 Lote 760, Brasília, DF 70632-100</p>
        <div className="flex gap-4">
          <Link href={"#"}>
            <SocialMediaInstagram />
          </Link>
          <Link href={"#"}>
            <SocialMediaFacebook />
          </Link>
          <Link href={"#"}>
            <SocialMediaYouTube />
          </Link>
          <Link href={"#"}>
            <SocialMediaThreePoints />
          </Link>
          <Link href={"#"}>
            <SocialMediaTwitter />
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-xs flex flex-wrap justify-between space-y-1">
        <p>
          © 2023 criado por Klimt Publicidade | Todos os direitos reservados{" "}
        </p>
        <p>
          CNPJ: 47.551.686/0001-72 | Termos de uso | Política de privacidade
        </p>
      </div>
    </div>
  );
}
