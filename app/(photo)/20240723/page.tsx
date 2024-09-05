import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240723/20240723.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月23日"} />;
  
}