import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240731/20240731.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月31日"} />;
  
}