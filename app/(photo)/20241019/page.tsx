import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20241019/20241019.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 lg:pt-6 pb-8">10月19日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/oshaTtkOC-0?si=DIM9pyQGziZM4-WX"} youtubeTitle={"hong kong pathfinder international camporee chinese theme song"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}