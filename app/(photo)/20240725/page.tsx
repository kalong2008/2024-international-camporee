import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240725/20240725.json'
import Youtube from "@/app/util/makeYoutube";

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 lg:pt-6 pb-6">7月25日</p>
    <div className="w-4/5 m-auto">
    <Youtube youtubeSource={"https://www.youtube.com/embed/J9kSBcW2mDw?si=C4NAiFZMxdj4Wi0x"} youtubeTitle={"hong kong pathfinder international daily review"} />
    </div><AlbumComponent photo={photo}  />
    </>
  );
  
}