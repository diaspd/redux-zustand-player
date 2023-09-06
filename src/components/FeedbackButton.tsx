import * as Dialog from '@radix-ui/react-dialog';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';

export function FeedbackButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className='outline-none focus:ring-2 focus:ring-purple-400'>
      <button className="whitespace-nowrap flex mb-auto items-center rounded bg-violet-500 gap-2 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 mt-2">
        <MessageCircle className="w-4 h-4" fontWeight="bold"/>
         <span className="hidden lg:flex">Deixar feedback</span>
      </button>
      </Dialog.Trigger>

      <Dialog.Portal>
      <Dialog.Overlay className="bg-zinc-950/70  fixed inset-0" />
        <Dialog.Content className="top-[50%] px-4 left-[50%] h-80 w-72 lg:w-96 translate-x-[-50%] translate-y-[-50%] rounded shadow-lg shadow-zinc-950 bg-zinc-800 fixed inset-0 flex space-y-5 py-5 flex-col" >
          <Dialog.Title className="font-medium text-zinc-200 flex">
           <span className='flex gap-3 mt-10'>Deixe seu feedback abaixo <Sparkles className='h-5 w-5 self-center text-purple-300'/> </span>

           <Dialog.Close className='ml-auto outline-none border border-zinc-800 focus-within:border rounded focus-within:border-zinc-400 fixed right-3 top-3'>
              <X className='h-5 w-5 hover:text-zinc-400'/>
            </Dialog.Close>
          </Dialog.Title>

          <textarea placeholder='Digite aqui sua opnião ...' name="" id="" className='bg-zinc-900 resize-none h-32 w-full outline-none focus:ring-2 focus:ring-purple-200 rounded p-2 text-zinc-300 scrollbar-thumb-zinc-300 scrollbar-thin scrollbar-track-zinc-950' />

          <Dialog.Close className='ml-auto outline-none ring-2 ring-zinc-800 focus:ring-purple-800 rounded'>
            <button 
              className='bg-purple-700 font-medium text-md hover:bg-purple-800 py-1 px-3 rounded text-zinc-200 flex gap-3'
            >
              Enviar feedback 
              <Send className='w-4 h-4 self-center'/> 
            </button>
          </Dialog.Close>
        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  )
}