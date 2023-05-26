import AboutTab from "@/components/AboutTab";
import BaseStats from "@/components/BaseStats";
import Layout from "@/components/Layout";
import { Constant } from "@/utils/constant";
import { getIndexImage } from "@/utils/hooks";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

const Tabs = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Base Stats",
  },
  {
    id: 3,
    name: "Evolution",
  },
  {
    id: 4,
    name: "Moves",
  },
];

export default function PokeDetail({ pokemon }: any) {
  console.log(pokemon.id);
  console.log(pokemon);
  const pokeIndex = getIndexImage(pokemon.id - 1);
  const [openTab, setOpenTab] = useState<number>(1);

  const handleTabs = (index: number) => {
    console.log(index);
    setOpenTab(index);
  };
  return (
    <>
      <Head>
        <title>Detail</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <div className="w-full">
        <Layout className="sm:!p-0">
          <div className="flex flex-col items-center justify-between ">
            <div className="bg-circlularPrimary flex flex-col justify-between w-full min-h-screen h-24  rounded-2xl  ">
              <section className="flex justify-between p-8 items-center ">
                <div className="flex flex-col gap-4">
                  <h2 className="capitalize text-5xl font-bold md:text-2xl  text-white">
                    {pokemon.name}
                  </h2>
                  <div className="flex gap-4 sm:gap-2">
                    {pokemon?.types?.map((item: any) => (
                      <div
                        key={item.slot}
                        className="text-sm sm:text-xs text-white font-semibold rounded-3xl border-3  bg-opacity-40 py-1 px-4 bg-white"
                      >
                        {item?.type?.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-3xl md:text-xl text-white font-semibold ">
                    #{pokeIndex}
                  </span>
                </div>
              </section>
              <section className="flex justify-center sm:top-13 lg:top-18 xl:top-14 top-20 relative z-10 w-full">
                <Image
                  alt={pokemon.name}
                  width={100}
                  height={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="w-1/4 h-auto sm:w-[60%] lg:w-1/2  "
                  src={`${Constant.ASSETS_IMG}${pokeIndex}.png`}
                />
              </section>

              <section className="bg-white w-full h-full p-8 sm:p-0 sm:px-5 sm:pt-12 rounded-t-3xl pt-16  ">
                <div className="text-sm sm:text-xs font-bold text-center text-gray-300 border-b border-gray-200">
                  <ul className="flex -mb-px w-full xs:overflow-x-auto ">
                    {Tabs.map((item, index) => (
                      <li className="mr-2 cursor-pointer" key={index}>
                        <a
                          onClick={() => handleTabs(index + 1)}
                          data-toggle="tab"
                          className={`${
                            openTab === index + 1
                              ? "text-primary border-b-2 border-primary active"
                              : "border-transparent"
                          } inline-block p-4 border-b-2  rounded-t-lg hover:text-primary hover:border-primary dark:hover:text-gray-300`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 mt-6 px-2">
                  <div className="flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <AboutTab pokemon={pokemon} />
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <BaseStats pokemon={pokemon} />
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <h1>Evoluion</h1>
                      </div>
                      <div
                        className={openTab === 4 ? "block" : "hidden"}
                        id="link4"
                      >
                        <h1>Moves</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${Constant.BASE_URL}/${context.query.name}`);
  const pokemon = await response.json();

  console.log(pokemon);

  return {
    props: {
      pokemon,
    },
  };
};
