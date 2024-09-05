import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240802/20240802.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月2日"} />;
  
}