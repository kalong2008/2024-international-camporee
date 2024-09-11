import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240809/20240809.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 pb-6">8月9日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/iCcmCLL5eaQ?si=wIOM0gXfl7O-WYAV"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}