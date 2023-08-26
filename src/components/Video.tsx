import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
    <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://youtu.be/7A4UQGrFU9Q?si=4hizm_gmRAgVtN6J"
    />
    </div>
  )
}