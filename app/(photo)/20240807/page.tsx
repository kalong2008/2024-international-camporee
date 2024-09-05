import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240807/20240807.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月7日"} />;
  
}