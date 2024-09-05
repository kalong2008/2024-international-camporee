import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240811/20240811.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月11日"} />;
  
}