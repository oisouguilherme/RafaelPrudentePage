import Link from "next/link";

export function CompromissoCard({children, style, styleButton, title}:any) {
  return (
    <div className={`${style} max-w-[355px] h-[339px] shadow-md border-2 p-6 sm:p-8 rounded-xl space-y-6 flex flex-col items-start`}>
      <div className="flex gap-4 items-center">
        {children}
        <h2 className="font-bold text-xl">{title}</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis
        fermentum mattis. Nullam quis nisi mauris. In viverra lectus sed nulla
        pharetra porta.
      </p>

      <Link className={`${styleButton} border-2 border-laranja-1 text-laranja-1 px-6 py-1 rounded-full text-xs font-bold`} href={"/compromisso/unicocompromisso"}>Veja mais</Link>
    </div>
  );
}
