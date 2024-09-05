import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240724/20240724.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月24日"} />;
  
}