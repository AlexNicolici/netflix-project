import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces/pokemon.interface";

const defaultPokemonState: {
  pokemons: Pokemon[];
} = {
  pokemons: [],
};

export const pokemon = createSlice({
  name: "pokemon",
  initialState: defaultPokemonState,
  reducers: {
    setPokemons(state, action) {
      return {
        ...state,
        pokemons: action.payload,
      };
    },
    removePokemonFromMyList(state, action) {
      const removePokemon = state.pokemons.filter((pokemon) => {
        return pokemon.name !== action.payload.name;
      });

      return {
        ...state,
        pokemons: removePokemon,
      };
    },
    removePokemonAbility(state, action) {
      const { pokemonName, abilityName } = action.payload;
      // const  abilityName = action.payload.abilityName
      // const  pokemonName = action.payload.pokemonName

      const newPokemonList = state.pokemons.map((pokemon) => {
        if (pokemon.name !== pokemonName) {
          return pokemon;
        }

        const removeAbility = pokemon.abilities.filter((ability) => {
          return ability.ability.name !== abilityName;
        });

        return {
          ...pokemon,
          abilities: removeAbility,
        };
      });
      return {
        ...state,
        pokemons: newPokemonList,
      };
    },

    removePokemonAbilityLevel(state, action) {
      const { pokemonName, abilityName, levelDMG } = action.payload;

      const newPokemonListWithoutLevels = state.pokemons.map((pokemon) => {
        if (pokemon.name !== pokemonName) {
          return pokemon;
        }

        // remove specific level from an ability
        const removeLevelsFromAbility = pokemon.abilities.map((ability) => {
          if (ability.ability.name !== abilityName) {
            return ability;
          }

          const pokemonLevelsList = ability.levels.filter((abilityLevel) => {
            return abilityLevel.level !== levelDMG;
          });

          return {
            ...ability,
            levels: pokemonLevelsList,
          };
        });

        // if there is an ability without a level, we remove it
        const pokemonAbilitiesListFiltered = removeLevelsFromAbility.filter(
          (ability) => {
            return ability.levels.length > 0;
          }
        );

        return {
          ...pokemon,
          abilities: pokemonAbilitiesListFiltered,
        };
      });
      return {
        ...state,
        pokemons: newPokemonListWithoutLevels,
      };
    },

    editPokemonName(state, action) {
      const { pokemonName, pokemonNewName } = action.payload;

      const pokemonUpdatedName = state.pokemons.map((pokemon) => {
        if (pokemon.name !== pokemonName) {
          return pokemon;
        }

        return {
          ...pokemon,
          name: pokemonNewName,
        };
      });

      return {
        ...state,
        pokemons: pokemonUpdatedName,
      };
    },
    addPokemonNewAbility(state, action) {
      const { pokemonName, ability } = action.payload;

      const pokemons = state.pokemons.map((pokemon) => {
        if (pokemon.name !== pokemonName) {
          return pokemon;
        }

        const newAbilitiesArray = [...pokemon.abilities, ability];

        return {
          ...pokemon,
          abilities: newAbilitiesArray,
        };
      });

      return {
        ...state,
        pokemons: pokemons,
      };
    },
  },

  extraReducers: (builder) => {},
});

export default pokemon.reducer;

export const {
  setPokemons,
  removePokemonFromMyList,
  removePokemonAbility,
  removePokemonAbilityLevel,
  editPokemonName,
  addPokemonNewAbility,
} = pokemon.actions;
