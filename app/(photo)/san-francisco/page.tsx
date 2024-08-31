import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/san-francisco/san-francisco.json'

export default function Page() {

  return <AlbumComponent title={"三藩市"} photo={photo} />;
  
}