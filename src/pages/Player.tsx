import { MessageCircle } from "lucide-react";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
    <div className="flex w-3/4 px-2 lg:w-[1100px] flex-col gap-6">
      
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

      <main className="relative gap-10 lg:flex grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <div className="flex-1">
          video
        </div>
        <aside className="lg:w-80 border-t lg:border-l border-zinc-800 bg-zinc-900 h-[600px] w-full">

        </aside>
      </main>
    </div>
  </div>
  )
}