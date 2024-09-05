import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240726/20240726.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月26日"} />;
  
}