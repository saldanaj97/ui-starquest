/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { planetList } from "./planet-list";

export default function PlanetSwitcher({ planet }) {
  const [planetImage, setPlanetImage] = useState(null);
  const [prevPlanetImage, setPrevPlanetImage] = useState(null);
  const [nextPlanetImage, setNextPlanetImage] = useState(null);

  const currPlanetIndex = planetList.findIndex((planetName) => planet === planetName);
  const prevPlanet = planetList[currPlanetIndex - 1] || "";
  const nextPlanet = planetList[currPlanetIndex + 1] || "";

  useEffect(() => {
    const loadPlanetImage = async (planetName, setImage) => {
      try {
        console.log(planetName);
        const image = await import(`../../assets/images/planets/${planetName.toLowerCase()}.png`);
        setImage(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadPlanetImage(planet, setPlanetImage);
    if (currPlanetIndex > 0) {
      loadPlanetImage(prevPlanet, setPrevPlanetImage);
    }

    if (currPlanetIndex < planetList.length - 1) {
      loadPlanetImage(nextPlanet, setNextPlanetImage);
    }
  }, [planet, currPlanetIndex, nextPlanet, prevPlanet]);

  if (!planetImage) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-row mx-20 sticky bottom-20'>
      <div className='flex justify-between w-full uppercase tracking-tighter'>
        <div className='flex items-center justify-center'>
          <p className='text-transparent bg-gradient-to-t from-action to-actionHover bg-clip-text text-8xl font-extralight mr-8'>
            {"<"}
          </p>
          <Image src={prevPlanetImage} width={150} height={150} />
          <p className='text-2xl font-semibold p-8'>{prevPlanet}</p>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-2xl font-semibold p-8'>{nextPlanet}</p>
          <Image src={nextPlanetImage} width={150} height={150} />
          <p className='text-transparent bg-gradient-to-t from-action to-actionHover bg-clip-text text-8xl font-extralight ml-8'>
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}
