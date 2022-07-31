import axios from 'axios';
import { Colours, logConsole } from './logger';

axios.interceptors.request.use(
   function (config) {
      logConsole(Colours.Red, '*** Requesting URL:', config.url);
      return config;
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error);
   }
);

interface Pokemon {
   species: {
      name: string;
      url: string;
   };
}

interface PokemonList {
   count: number;
   next: string;
   previous?: unknown;
   results: {
      name: string;
      url: string;
   }[];
}

const makeURLFlyweights = <ReturnType>(urls: Record<string, string>) => {
   const myObject: Record<string, Promise<ReturnType>> = {};

   return new Proxy(myObject, {
      get: (target, name: string) => {
         logConsole(Colours.Blue, `Fetching ${name} ${urls[name]}`);
         if (!target[name]) {
            target[name] = axios.get<ReturnType>(urls[name]).then((res) => res.data);
         }
         return target[name];
      },
   });
};

export const runner = async (): Promise<void> => {
   const pokemon = await axios.get<PokemonList>('https://pokeapi.co/api/v2/pokemon/');

   const urls = pokemon.data.results.reduce(
      (acc, { name, url }) => ({
         ...acc,
         [name]: url,
      }),
      {}
   );

   const lookup = makeURLFlyweights<Pokemon>(urls);
   const data = await lookup.bulbasaur;
   logConsole(Colours.Yellow, 'bulbasaur', data.species);

   const data2 = await lookup.venusaur;
   logConsole(Colours.Yellow, 'venusaur', data2.species);
};
