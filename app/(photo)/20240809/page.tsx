import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240809/20240809.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月9日"} />;
  
}