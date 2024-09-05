import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240727/20240727.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月27日"} />;
  
}