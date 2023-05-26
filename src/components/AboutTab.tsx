import React from "react";

type Pokemon = {
  species: {
    name: string;
  };
  height: number;
  weight: number;
  abilities: [];
};

type Props = {
  pokemon: Pokemon;
};

export default function AboutTab({ pokemon }: Props) {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Species
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Height
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Weight
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Ablities
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-base sm:text-xs font-bold">
          {pokemon?.species?.name}
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-bold">
          {pokemon?.height}
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-bold">
          {pokemon?.weight}
        </div>
        <div className="capitalize text-gray-500 text-base sm:text-xs font-bold ">
          {pokemon.abilities.map((item: any) => `${item?.ability?.name}, `)}
        </div>
      </div>
    </div>
  );
}
