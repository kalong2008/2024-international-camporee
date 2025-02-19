import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240812/20240812.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-6 pb-6">8月12日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/Ta3t3PC2P1k?si=ebG-ie4318za8yYM"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo} />
    </>
  );
  
}