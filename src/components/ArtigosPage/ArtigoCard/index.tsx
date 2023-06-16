import Link from "next/link";

export function ArtigoCard(){
  return(
    <Link href={"/artigos/unicoartigo"} className="sm:w-64 bg-white text-xs rounded-2xl p-7 space-y-2">
      <p>10/10/2023</p>
      <h2 className="text-xl font-bold">Lorem Ipsum is simply dummy text of the printing</h2>
      <p className="text-laranja-1 font-bold">10/10/2023</p>
    </Link>
  )
}