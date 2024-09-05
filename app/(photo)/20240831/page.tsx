import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240831/20240831.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月31日"} />;
  
}