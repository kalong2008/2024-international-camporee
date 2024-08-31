import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/pre-trip/pre-trip.json'

export default function Page() {

  return <AlbumComponent title={"旅程前訓練"} photo={photo} />;
  
}