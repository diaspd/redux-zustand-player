import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

interface ModuleProps {
  title: string
  moduleIndex: number
  amountOfLessons: number
}

export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  return(
    <div className="divide-y-2 divide-zinc-900">
    <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-sm font-medium">{moduleIndex + 1}</div>
    
      <div className="flex flex-col gap-1 text-left">
        <strong className="text-sm">{title}</strong>
        <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
      </div>

      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400"/>
    </button>

      <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="10:50"/>

          <Lesson title="Fundamentos do Zustand" duration="5:00"/>

          <Lesson title="Trabalhando com Redux e Zustand" duration="15:36" />
      </nav>
    </div>
  )
}