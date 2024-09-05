import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240805/20240805.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月5日"} />;
  
}