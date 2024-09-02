import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/pre-trip/pre-trip.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"營前訓練"} />;
  
}