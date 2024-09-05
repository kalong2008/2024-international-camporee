import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240730/20240730.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月30日"} />;
  
}