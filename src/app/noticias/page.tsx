import { Footer } from "@/components/Footer";
import { Main } from "@/components/NoticiasPage/Main";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Noticias(){
  return(
    <>
      <TitleHeader title="Notícias" />
      <Main/>
      <Footer/>
    </>
  )
}