import React from "react";

type Pokemon = {
  stats: [];
};

type Props = {
  pokemon: Pokemon;
};

export default function BaseStats({ pokemon }: Props) {
  return (
    <div className="flex gap-12">
      <div className="flex flex-col gap-4">
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          HP
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Attack
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Defense
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Sp.Atk
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Sp.Def
        </div>
        <div className="text-gray-500 text-base sm:text-xs font-semibold">
          Speed
        </div>
      </div>
      <div className=" flex flex-col w-full gap-4">
        {pokemon?.stats?.map((item: any, index: any) => (
          <div className="flex justify-between gap-8 items-center" key={index}>
            <div key={index} className="flex flex-col gap-4">
              <div className="text-gray-500 text-base sm:text-xs font-bold">
                {item.base_stat}
              </div>
            </div>
            <div className="h-1 w-full bg-gray-100">
              <div
                style={{
                  width: `${item.base_stat}%`,
                }}
                className={`h-full ${
                  item.base_stat < 60 ? "bg-red-600" : "bg-green-600"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
