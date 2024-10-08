import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240808/20240808.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 lg:pt-6 pb-6">8月8日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/ej07c1e9PuA?si=XrZMfvpMUjXGpVK1"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}