import { Image } from "@nextui-org/image";
import marsImg from "../../assets/images/mars.png";

export default function Mars() {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-mars bg-cover bg-center'>
      <div className='relative'>
        <Image className='w-full h-full object-cover -rotate-45' src={marsImg} alt='Mars' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white uppercase z-20'>
          <h1 className='text-9xl font-bold uppercase'>Mars</h1>
          <p className='text-2xl font-semibold'>The Red Planet</p>
        </div>
      </div>
    </div>
  );
}
