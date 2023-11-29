import { Button } from "@nextui-org/react";
import { useState } from "react";
import PlanetInfo from "./planet";
import { planetList, planets } from "./planet-list";
import PlanetSwitcher from "./planet-switcher";

export default function Planet() {
  const [currentPlanetSelected, setCurrentPlanetSelected] = useState("mars");

  return (
    <>
      {planetList.map((planet) => {
        let currentPlanet = planets[planet];
        return <PlanetInfo planet={currentPlanet} key={planet} />;
      })}
      <Button
        radius='full'
        className='sticky bottom-96 z-10 w-1/4 bg-gradient-to-t from-action to-actionHover text-white shadow-lg px-24 py-8 uppercase text-lg font-semibold tracking-tighter hover:transition-all'
      >
        Start Tour
      </Button>
      <PlanetSwitcher planet={currentPlanetSelected} updateSelectedPlanetState={setCurrentPlanetSelected} />
    </>
  );
}
