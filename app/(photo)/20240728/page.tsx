import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240728/20240728.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 pb-6">7月28日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/yj0E2n-RLJw?si=bYCUcSHNqXEmx8Q_"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}