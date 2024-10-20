import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20241019/20241019.json'

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 lg:pt-6 pb-8">10月19日</p>
    <AlbumComponent photo={photo}  />
    </>
  );
  
}