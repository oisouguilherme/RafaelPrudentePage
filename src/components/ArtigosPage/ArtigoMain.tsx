import { PaginationNumbers } from "../Utils/PaginationNumbers";
import { ArtigoCard } from "./ArtigoCard";

export function ArtigoMain(){
  return(
    <div className="max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
        <ArtigoCard/>
      </div>
      <PaginationNumbers/>
    </div>
  )
}