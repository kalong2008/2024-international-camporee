import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240718/20240718.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"7月18日"} />;
  
}