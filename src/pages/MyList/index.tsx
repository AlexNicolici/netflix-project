import React, { useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import PokemonCard from "../../Components/PokemonCard";
import { setPokemons } from "../../redux/reducer/pokemon.reducer";

const gettedPokemons = [
  {
    name: "Pikachu",
    weight: 60,
    type: "Electric",
    abilities: [
      {
        ability: {
          name: "static",
        },
        is_hidden: false,
        slot: 1,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "lightning-rod",
        },
        is_hidden: true,
        slot: 3,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "aura sabiei",
        },
        is_hidden: false,
        slot: 2,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "corp rezistent",
        },
        is_hidden: true,
        slot: 4,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "armura vrajita",
        },
        is_hidden: false,
        slot: 5,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
    ],
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
    ],
  },
  {
    name: "Bulbasaur",
    weight: 69,
    type: "Grass, Poison",
    abilities: [
      {
        ability: {
          name: "overgrow",
        },
        is_hidden: false,
        slot: 1,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "tais",
        },
        is_hidden: true,
        slot: 2,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "armura vrajita",
        },
        is_hidden: false,
        slot: 3,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
      {
        ability: {
          name: "teama",
        },
        is_hidden: true,
        slot: 4,
        levels: [
          {
            damage: 23,
            level: 1,
          },
          {
            damage: 60,
            level: 2,
          },
          {
            damage: 70,
            level: 3,
          },
        ],
      },
    ],
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
    ],
  },
];

function MyList() {
  const dispatch = useAppDispatch();
  const {
    movie: { myMoviesList },
    pokemon: { pokemons },
  } = useAppSelector((state) => ({
    movie: state.movie,
    pokemon: state.pokemon,
  }));

  useEffect(() => {
    dispatch(setPokemons(gettedPokemons));
  }, [dispatch]);

  return (
    <div className="px-[52px] flex flex-row">
      {myMoviesList.data.map((myMovie) => {
        return (
          <MovieCard
            key={myMovie.name}
            movie={myMovie}
            className="mx-[8px]"
            width={300}
          />
        );
      })}

      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            className="mx-[8px]"
            width={300}
          />
        );
      })}
    </div>
  );
}

export default MyList;
