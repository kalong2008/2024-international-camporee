import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/camporee/camporee.json'

export default function Page() {

  return <AlbumComponent photo={photo} title={"旅程前訓練"} />;
  
}