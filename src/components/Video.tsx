import ReactPlayer from "react-player";
import { Loader2 } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  const { currentLesson } = useCurrentLesson()
  
  const { next } = useStore(store => {
    return {
      isLoading: store.isLoading,
      next: store.next
    }
  })

  function handlePlayNext() {
    next()
  }
  
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {!currentLesson  ? (
        <div className="flex h-full items-center justify-center">
          <Loader2 className="w-6 h-6 text-zinc-400 animate-spin transition-all delay-1000" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        />
      )}
    </div>
  )
}