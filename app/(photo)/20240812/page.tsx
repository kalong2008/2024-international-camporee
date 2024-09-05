import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240812/20240812.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月12日"} />;
  
}