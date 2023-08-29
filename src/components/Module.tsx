import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

import * as Collapsible from '@radix-ui/react-collapsible'
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface ModuleProps {
  title: string
  moduleIndex: number
  amountOfLessons: number
}

export function Module({ title, moduleIndex, amountOfLessons }: ModuleProps) {
  const dispatch = useDispatch()

  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons
  })

  return(
    <Collapsible.Root className="group">
    <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
      <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm font-medium">{moduleIndex + 1}</div>
    
      <div className="flex flex-col gap-1 text-left">
        <strong className="text-sm">{title}</strong>
        <span className="text-sm text-zinc-400">{amountOfLessons} aulas</span>
      </div>

      <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform duration-500"/>
    </Collapsible.Trigger>

    <Collapsible.Content className="animate-slideDown">
      <nav className="relative flex flex-col gap-4 p-6">
        {lessons.map((lesson, lessonIndex) => {
          return (
            <Lesson 
              key={lesson.id} 
              title={lesson.title} 
              duration={lesson.duration} 
              onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
            />
          )
        })}
      </nav>
    </Collapsible.Content>
    </Collapsible.Root>
  )
}
