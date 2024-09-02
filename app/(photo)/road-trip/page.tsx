import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/road-trip/road-trip.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"黃石公園"} />;
  
}