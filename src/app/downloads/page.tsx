import { DownloadsPageMain } from "@/components/DownloadsPage/DownloadsPageMain";
import { Footer } from "@/components/Footer";
import { TitleHeader } from "@/components/Utils/TitleHeader";

export default function Downloads(){
  return(
    <div className="bg-gray-100">
      <TitleHeader title="Downloads"/>
      <div className="max-w-6xl mx-auto flex justify-center gap-5 flex-wrap py-20 px-4">
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
        <DownloadsPageMain/>
      </div>
      <Footer/>
    </div>
  )
}