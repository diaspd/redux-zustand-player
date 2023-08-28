import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

import * as Collapsible from '@radix-ui/react-collapsible'

interface ModuleProps {
  title: string
  moduleIndex: number
  amountOfLessons: number
}

export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  return(
    <Collapsible.Root className="group">
    <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-900 text-sm font-medium">{moduleIndex + 1}</div>
    
      <div className="flex flex-col gap-1 text-left">
        <strong className="text-sm">{title}</strong>
        <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
      </div>

      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform duration-500"/>
    </Collapsible.Trigger>

    <Collapsible.Content className="animate-slideDown">
      <nav className="relative flex flex-col gap-4 p-6">
          <Lesson title="Fundamentos do Redux" duration="10:50"/>

          <Lesson title="Fundamentos do Zustand" duration="5:00"/>

          <Lesson title="Trabalhando com Redux e Zustand" duration="15:36" />
      </nav>
    </Collapsible.Content>
    </Collapsible.Root>
  )
}