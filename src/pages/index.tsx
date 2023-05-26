import Image from "next/image";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import PokemonCards from "@/components/PokemonCards";
import { Constant } from "@/utils/constant";
import Layout from "@/components/Layout";

type Pokemons = {
  count: number;
  next: string;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

type Props = {
  pokemons: Pokemons;
};

export default function Home({ pokemons }: Props) {
  console.log(pokemons);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <div className="flex md:items-start w-full min-h-screen">
        <Layout>
          <div className="grid grid-cols-4 md:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1  gap-4">
            {pokemons.results.map((monster, index) => (
              <PokemonCards key={index} pokemon={monster} index={index} />
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(Constant.BASE_URL);
  const pokemons = await response.json();

  return {
    props: {
      pokemons,
    },
  };
};
