import { MessageCircle } from "lucide-react";

export function Header () {
  return (
    <header className="flex items-center justify-between ">
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
      <span className="text-sm text-zinc-400">Módulo "Desvendando o Redux"</span>
    </div>

    <button className="whitespace-nowrap flex mb-auto items-center rounded bg-violet-500 gap-2 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 mt-2">
      <MessageCircle className="w-4 h-4" fontWeight="bold"/>
     <span className="hidden lg:flex">Deixar feedback</span>
    </button>
  </header>
  )
}