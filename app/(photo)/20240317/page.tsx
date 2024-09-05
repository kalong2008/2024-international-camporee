import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240317/20240317.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"3月17日"} />;
  
}