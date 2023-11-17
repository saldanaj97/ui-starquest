import { Button, Image } from "@nextui-org/react";
import marsImg from "../../assets/images/mars.png";

export default function Mars() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='relative'>
        <Image className='w-full h-full object-cover -rotate-45' src={marsImg} alt='Mars' />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white uppercase z-20'>
          <h1 className='text-9xl font-bold uppercase'>Mars</h1>
          <p className='text-2xl font-semibold'>The Red Planet</p>
        </div>
        <Button
          radius='full'
          className='mt-4 bg-gradient-to-t from-action to-actionHover text-white shadow-lg px-24 py-8 uppercase text-lg font-semibold tracking-tighter hover:transition-all'
        >
          Start Tour
        </Button>
      </div>
    </div>
  );
}
