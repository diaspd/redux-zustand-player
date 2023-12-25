import { useCurrentLesson, useStore } from "../zustand-store";
import { FeedbackButton } from "./FeedbackButton";

export function Header () {
  const { currentModule, currentLesson } = useCurrentLesson()

  const isLoading = useStore(store => store.isLoading)

  return (
    <header className="flex items-center justify-between h-12">
      {isLoading ? (
        <div className="shadow rounded-md w-1/3 animate-pulse h-6">
          <div className="flex">
            <div className="flex-1 py-1">
              <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-3 bg-zinc-700 rounded col-span-2" />
                <div className="h-3 bg-zinc-700 rounded col-span-1" />
              </div>
              <div className="h-2 bg-zinc-700 rounded" />
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
   
      <FeedbackButton />
    </header>
  )
}