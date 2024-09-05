import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240728/20240728.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月28日"} />;
  
}