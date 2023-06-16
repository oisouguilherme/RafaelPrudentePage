import { ArtigoBody } from "@/components/ArtigosPage/ArtigoBody";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";
import { UltimasNoticas } from "@/components/HomePage/UltimasNoticas";
import { ArtigoCard } from "@/components/ArtigosPage/ArtigoCard";
import Link from "next/link";

export default function UnicoArtigo() {
  return (
    <div className="bg-gray-100">
      <TitleHeader title="Artigo" />
      <ArtigoBody />
      <div className="border-2 max-w-6xl mx-auto mb-16" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-20 pb-28">
        <h2 className="text-5xl font-bold text-laranja-1">Últimos artigos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <ArtigoCard />
          <ArtigoCard />
          <ArtigoCard />
          <ArtigoCard />
        </div>
        <Link
          href={""}
          className="text-laranja-1 text-lg w-fit mx-auto font-bold py-4 px-20 sm:px-32 border-2 rounded-full duration-300 hover:scale-105"
        >
          Mais artigos
        </Link>
      </div>
      <Footer />
    </div>
  );
}
