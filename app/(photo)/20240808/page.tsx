import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240808/20240808.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"8月8日"} />;
  
}