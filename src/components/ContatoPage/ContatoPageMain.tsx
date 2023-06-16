export function ContatoPageMain(){
  return(
    <div className="py-14 max-w-[930px] mx-auto space-y-8 px-4">
      <p className="md:px-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate iaculis felis, in luctus augue luctus nec. Etiam convallis fermentum mattis. Nullam quis nisi mauris.</p>
      <form className="flex flex-col gap-4">
        <input type="text" className="px-4 py-3 border-2 rounded-full" placeholder="Nome"/>
        <div className="flex gap-4 md:gap-5 flex-col md:flex-row">
          <input type="tel" className="px-4 py-3 border-2 rounded-full w-full" placeholder="Telefone"/>
          <input type="email" className="px-4 py-3 border-2 rounded-full w-full" placeholder="E-mail"/>
        </div>
        <textarea className="rounded-3xl border-2 h-48 px-4 py-20" placeholder="Mensagem" />
        <button className="bg-laranja-1 font-semibold text-3xl text-white py-4 rounded-full">Enviar</button>
      </form>
    </div>
  )
}