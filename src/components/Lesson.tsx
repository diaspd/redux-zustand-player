import { VideoIcon } from "lucide-react";

interface LessonProps {
  title: string
  duration: string
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
        <VideoIcon className="w-5 h-5 text-zinc-500"/>
        <span className="truncate">{title}</span>
        <span className="ml-auto font-mono text-sm text-zinc-500">{duration}</span>
    </button>
  )
}