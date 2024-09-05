import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240729/20240729.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月29日"} />;
  
}