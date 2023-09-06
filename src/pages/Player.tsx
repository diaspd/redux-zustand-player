import { useEffect } from "react";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";

import { SidebarLoading } from "../components/SidebarLoading";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Player() {
  const { course, load } = useStore(store => {
    return {
      course: store.course,
      load: store.load
    }
  })

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    void load()
  }, [load])

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`
    }
  }, [currentLesson])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
    <div className="flex w-3/4 px-2 lg:w-[1100px] flex-col gap-6">
      
      <Header />

      <main className="relative lg:flex grid overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow lg:pr-80">
        <div className="flex-1">
         <Video />
        </div>
      <aside className="max-h-96 lg:max-h-full scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 lg:w-80 border-t lg:border-l border-zinc-800 bg-zinc-900 w-full overflow-y-scroll lg:absolute lg:top-0 lg:bottom-0 lg:right-0">
   
      <div className="divide-y-2 divide-zinc-900" > 
        {!course ? (
          <>
            <SidebarLoading />
            <SidebarLoading />
            <SidebarLoading />
          </>
        ) : (
          course?.modules?.map((module, index) => {
          return (
            <Module 
              key={module.id} 
              moduleIndex={index} 
              title={module.title} 
              amountOfLessons={module.lessons.length} 
            />
          )
        })
        ) }
      </div>

      </aside>
      </main>
    </div>
  </div>
  )
}