"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/Icons/logo.svg";
import Link from "next/link";
import Instagram from '../../assets/Icons/instagram.svg'
import Facebook from '../../assets/Icons/facebook.svg'
import Twitter from '../../assets/Icons/twitter.svg'
import SocialLink from '../../assets/Icons/socialLink.svg'
import Youtube from '../../assets/Icons/youtube.svg'
import Whatsapp from '../../assets/Icons/whatsapp.svg'


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full flex justify-around items-center z-50 py-6 lg:px-24 sm:px-12 px-2">
      <div className="cursor-pointer w-56 md:w-96">
        <a href="/">
          <Image src={Logo} alt="Logo Rafael Prutende deputado federal" />
        </a>
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
      <div className="hidden lg:flex items-center justify-between w-full">

        <ul className="flex gap-6 font-bold text-[#818181]">
          <li className="cursor-pointer">
            <a href="/">Sobre</a>
          </li>
          <li className="cursor-pointer">
            Noticias
          </li>
          <li className="cursor-pointer">
            Artigos
          </li>
          <li className="cursor-pointer">
            Compromisos
          </li>
          <li className="cursor-pointer">
            Downloads
          </li>
          <li className="cursor-pointer">
            Contato
          </li>
        </ul>

        <ul className="flex gap-6 items-center">
          <li>
            <Link href={""}>
              <Image src={Instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={Facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={Youtube} alt="Youtube" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={SocialLink} alt="SocialLink" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={Twitter} alt="Twitter" />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={Whatsapp} alt="Whatsapp" />
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
