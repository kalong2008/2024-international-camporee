import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240810/20240810.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月10日"} />;
  
}