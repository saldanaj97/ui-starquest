/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function PlanetInfo({ planet }) {
  const [planetImage, setPlanetImage] = useState(null);
  const { name, nickname, description, moons, radius, distanceFromSun, orbitalPeriod } = planet;

  useEffect(() => {
    // Load the image dynamically based on the planet name
    import(`../../assets/images/planets/${name.toLowerCase()}.png`)
      .then((image) => {
        setPlanetImage(image.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [name]);

  if (!planetImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='relative uppercase w-full mx-20'>
        <div className='flex flex-row items-center'>
          <div className='flex flex-col text-left tracking-tighter w-1/3'>
            <p className='text-2xl font-semibold'>Description</p>
            <p className='text-2xl font-light normal-case md:mr-16'>{description}</p>
          </div>
          <div className='flex flex-col'>
            <Image className='object-cover' src={planetImage} alt='planet-img' width={700} height={700} />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white uppercase z-20'>
              <h1 className='text-9xl font-bold uppercase'>{name}</h1>
              <h2 className='text-2xl font-semibold'>{nickname}</h2>
            </div>
          </div>
          <div className='flex flex-col text-right tracking-tighter w-1/3'>
            <div className='mb-4'>
              <p className='text-2xl font-semibold'>Moons</p>
              <p className='text-2xl font-light normal-case'>{moons}</p>
            </div>
            <div className='mb-4'>
              <p className='text-2xl font-semibold'>Radius</p>
              <p className='text-2xl font-light normal-case'>{radius}</p>
            </div>
            <div className='mb-4'>
              <p className='text-2xl font-semibold'>Distance From Sun</p>
              <p className='text-2xl font-light normal-case'>{distanceFromSun}</p>
            </div>
            <div className='mb-4'>
              <p className='text-2xl font-semibold'>Orbital Period</p>
              <p className='text-2xl font-light normal-case'>{orbitalPeriod}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
