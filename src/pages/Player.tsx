import { ChevronDown, MessageCircle, VideoIcon } from "lucide-react";
import ReactPlayer from "react-player";

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

      <main className="relative lg:flex grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow lg:pr-80">
        <div className="flex-1">
          <div className="w-full bg-zinc-950 aspect-video">
          <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=Jai8w6K_GnY"
              />
          </div>
        </div>
        <aside className="max-h-96 lg:max-h-full scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 lg:w-80 border-t lg:border-l border-zinc-800 bg-zinc-900 w-full overflow-y-scroll lg:absolute lg:top-0 lg:bottom-0 lg:right-0">
          <div className="divide-y-2 divide-zinc-900">
            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
              <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-sm font-medium">01</div>
            
              <div className="flex flex-col gap-1 text-left">
                <strong className="text-sm">Desvendando o Redux</strong>
                <span className="text-sm text-zinc-400">12 aulas</span>
              </div>

              <ChevronDown className="w-5 h-5 ml-auto text-zinc-400"/>
            </button>

            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
              <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-sm font-medium">02</div>
            
              <div className="flex flex-col gap-1 text-left">
                <strong className="text-sm">Desvendando o Redux</strong>
                <span className="text-sm text-zinc-400">12 aulas</span>
              </div>

              <ChevronDown className="w-5 h-5 ml-auto text-zinc-400"/>
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Refsdfsddux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>
            </nav>

            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
              <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-sm font-medium">03</div>
            
              <div className="flex flex-col gap-1 text-left">
                <strong className="text-sm">Desvendando o Redux</strong>
                <span className="text-sm text-zinc-400">12 aulas</span>
              </div>

              <ChevronDown className="w-5 h-5 ml-auto text-zinc-400"/>
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>

              <button className="flex items-center gap-3 text-sm text-zinc-400">
                <VideoIcon className="w-5 h-5 text-zinc-500"/>
                <span>Fundamentos do Redux</span>
                <span className="ml-auto font-mono text-sm text-zinc-500">9:13</span>
              </button>
            </nav>
          </div>
        </aside>
      </main>
    </div>
  </div>
  )
}