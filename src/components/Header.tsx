import { MessageCircle } from "lucide-react";
import { useCurrentLesson } from "../store/slices/player";
import { useAppSelector } from "../store";

export function Header () {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector(state => state.player.isLoading)

  return (
    <header className="flex items-center justify-between h-12">
      {isCourseLoading ? (
        <div className="shadow rounded-md w-1/3 animate-pulse h-6">
          <div className="flex">
            <div className="flex-1 py-1">
              <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-700 rounded col-span-2"></div>
                <div className="h-3 bg-zinc-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-zinc-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        ) : (
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
          <span className="text-sm text-zinc-400">Módulo "{currentModule?.title}"</span>
        </div>
      )}
   

    <button className="whitespace-nowrap flex mb-auto items-center rounded bg-violet-500 gap-2 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 mt-2">
      <MessageCircle className="w-4 h-4" fontWeight="bold"/>
     <span className="hidden lg:flex">Deixar feedback</span>
    </button>
  </header>
  )
}