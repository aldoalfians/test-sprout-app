import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Constant } from "@/utils/constant";
import { getIndexImage } from "@/utils/hooks";

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  pokemon: Pokemon;
  index: number;
};

export default function PokemonCards({ pokemon, index }: Props) {
  const pokeIndex = getIndexImage(index);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="ima rounded-2xl shadow-xl p-4 flex sm:flex-col sm:items-center justify-between bg-primary">
        <span className="capitalize font-semibold text-lg lg:text-sm sm:text-base  text-white">
          {pokemon.name}
        </span>
        <Image
          alt={pokemon.name}
          width={100}
          height={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="w-1/2 h-auto sm:w-full"
          src={`${Constant.ASSETS_IMG}${pokeIndex}.png`}
        />
      </div>
    </Link>
  );
}
