import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240801/20240801.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月1日"} />;
  
}