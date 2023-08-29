import { PlayCircle, VideoIcon } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {
  return (
    <button 
      onClick={onPlay} 
      disabled={isCurrent}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-200"
    >
        {isCurrent ? ( 
          <PlayCircle className="w-5 h-5 text-emerald-500"/>
        ) : (
          <VideoIcon className="w-5 h-5 text-zinc-500"/>
        )}
        <span className="truncate">{title}</span>
        <span className="ml-auto font-mono text-sm text-zinc-500">{duration}</span>
    </button>
  )
}