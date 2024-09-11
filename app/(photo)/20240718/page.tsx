import AlbumComponent from "@/app/util/makeAlbum"; 
import photo from '@/public/photo/20240718/20240718.json'

export default function Page() {

  return (
    <>
    <p className="text-3xl font-bold leading-6 text-gray-900 text-center pt-0 lg:pt-6 pb-8">7月18日</p>
    <AlbumComponent photo={photo}  />
    </>
  );
  
}