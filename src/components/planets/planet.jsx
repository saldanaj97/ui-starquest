/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";
import marsImg from "../../assets/images/mars.png";

export default function PlanetInfo({ planet }) {
  const { name, nickname, moons, radius, distanceFromSun, orbitalPeriod } = planet;

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative uppercase w-full mx-20'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col text-left tracking-tighter w-1/3'>
            <div className='mb-4'>
              <p className='text-3xl'>Asteroid</p>
              <p className='font-thin text-2xl'>320T Jung</p>
            </div>
            <div className='mb-4'>
              <p className='text-xl'>Launch & Return</p>
              <p className='font-thin text-2xl'>Nov 23 - Dec 24</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Image className='w-full h-full object-cover -rotate-45' src={marsImg} alt='Mars' />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white uppercase z-20'>
              <h1 className='text-9xl font-bold uppercase'>{name}</h1>
              <h2 className='text-2xl font-semibold'>{nickname}</h2>
            </div>
          </div>
          <div className='flex flex-col text-right tracking-tighter w-1/3'>
            <div className='mb-4'>
              <p className='text-3xl'>Moons</p>
              <p className='text-2xl font-thin'>{moons}</p>
            </div>
            <div className='mb-4'>
              <p className='text-3xl'>Radius</p>
              <p className='text-2xl font-thin'>{radius}</p>
            </div>
            <div className='mb-4'>
              <p className='text-3xl'>Distance From Sun</p>
              <p className='text-2xl font-thin'>{distanceFromSun}</p>
            </div>
            <div className='mb-4'>
              <p className='text-3xl'>Orbital Period</p>
              <p className='text-2xl font-thin'>{orbitalPeriod}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
