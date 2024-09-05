import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240806/20240806.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月6日"} />;
  
}