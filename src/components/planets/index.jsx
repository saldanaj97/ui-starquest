import { Button } from "@nextui-org/react";
import { useState } from "react";
import PlanetInfo from "./planet";
import { planetList, planets } from "./planet-list";

const mars = {
  name: "Mars",
  nickname: "The Red Planet",
  description:
    "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
  moons: "Phobos, Deimos",
  radius: "3,389.5 km or 2,106 mi",
  distanceFromSun: "228 million km or 142 million mi",
  orbitalPeriod: "687 Earth Days",
  image: "mars.png",
  color: "#EA2A4F",
};

export default function Planet() {
  const [currentPlanetSelected, setCurrentPlanetSelected] = useState(mars);

  return (
    <div>
      {planetList.map((planet) => {
        console.log(planets[planet]);
        return <PlanetInfo planet={planets[planet]} key={planet} />;
      })}
      <Button
        radius='full'
        className='sticky bottom-96 z-10 w-1/4 bg-gradient-to-t from-action to-actionHover text-white shadow-lg px-24 py-8 uppercase text-lg font-semibold tracking-tighter hover:transition-all'
      >
        Start Tour
      </Button>
    </div>
  );
}
