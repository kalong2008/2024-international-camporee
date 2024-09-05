import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240803/20240803.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月3日"} />;
  
}