import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240725/20240725.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月25日"} />;
  
}