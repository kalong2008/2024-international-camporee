import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240731/20240731.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 pb-6">7月31日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/U9e7iJxx8RQ?si=_7sClHO2OaxHHxL3"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}