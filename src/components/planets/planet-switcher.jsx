/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Image } from "@nextui-org/react";
import marsImg from "../../assets/images/planets/mars.png";

export default function PlanetSwitcher({ planet, updateSelectedPlanetState }) {
  return (
    <div className='flex flex-row mx-20 sticky bottom-20'>
      <div className='flex flex-row justify-between w-full uppercase tracking-tighter'>
        <div className='flex flex-row items-center justify-center'>
          <p className='text-transparent bg-gradient-to-t from-action to-actionHover bg-clip-text text-8xl font-extralight mr-8'>
            {"<"}
          </p>
          <Image src={marsImg} width={150} height={150} />
          <p className='text-2xl font-semibold p-8'>Venus</p>
        </div>
        <div className='flex flex-row items-center justify-center'>
          <p className='text-2xl font-semibold p-8'>Jupiter</p>
          <Image src={marsImg} width={150} height={150} />
          <p className='text-transparent bg-gradient-to-t from-action to-actionHover bg-clip-text text-8xl font-extralight ml-8'>
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}
