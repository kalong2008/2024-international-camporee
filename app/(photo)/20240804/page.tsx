import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240804/20240804.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月4日"} />;
  
}