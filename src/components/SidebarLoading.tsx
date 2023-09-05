export function SidebarLoading() {
  return (
    <div className="shadow-sm shadow-purple-500 rounded-md p-5 max-w-sm w-full mx-auto mb-0.5">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-slate-700 h-10 w-10" />
          <div className="flex-1 space-y-3 py-1">
          <div className="h-3 bg-slate-700 rounded" />
          <div className="space-y-2">
          <div className="grid grid-cols-1">
            <div className="h-2 bg-slate-700 rounded col-span-2 w-1/2" />
          </div>    
        </div>
      </div>
      
      <div className="h-5 w-5 bg-slate-700 rounded-lg" />
      </div>
    </div>
  )
}