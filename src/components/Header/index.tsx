"use client";

import { useState } from "react";
import Link from "next/link";

import {
  SocialMediaFacebook,
  SocialMediaInstagram,
  SocialMediaThreePoints,
  SocialMediaTwitter,
  SocialMediaWhatsapp,
  SocialMediaYouTube,
} from "@/assets/Icons/IconsSocialMedia";
import { IconsUtilLogoOrange } from "@/assets/Icons/IconsUtils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="container mx-auto max-w-6xl px-4 flex justify-around items-center z-50 py-6">
      <div className="cursor-pointer w-56 md:w-96">
        <Link href="/">
          <IconsUtilLogoOrange />
        </Link>
      </div>
      <div className="lg:hidden">
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white w-64 transform transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="p-4 space-y-4">
            <li className="cursor-pointer font-bold hover:text-vermelho duration-300">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer font-bold hover:text-vermelho duration-300">
              Bebidas
            </li>
            <li className="cursor-pointer font-bold hover:text-vermelho duration-300">
              Carnes e Porções
            </li>
            <li className="cursor-pointer font-bold hover:text-vermelho duration-300">
              Outros
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex gap-4 items-center justify-between w-full">
        <ul className="flex gap-6 font-bold text-[#818181]">
          <li className="cursor-pointer">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/noticias">Noticias</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/artigos">Artigos</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/compromisso">Compromisos</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/downloads">Downloads</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>

        <ul className="flex gap-6 items-center">
          <li>
            <Link href={""}>
              <SocialMediaInstagram />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <SocialMediaFacebook />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <SocialMediaYouTube />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <SocialMediaThreePoints />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <SocialMediaTwitter />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <SocialMediaWhatsapp />
            </Link>
          </li>
        </ul>
      </div>

      <div className="hamburger lg:hidden" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black mb-1"></span>
        <span className="block w-6 h-1 bg-black"></span>
      </div>
    </div>
  );
}
