import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  editPokemonName,
  removePokemonAbility,
  removePokemonAbilityLevel,
  removePokemonFromMyList,
} from "../redux/reducer/pokemon.reducer";
import { useAppSelector } from "../redux/store";
import { Pokemon } from "../redux/interfaces/pokemon.interface";
import { Button, IconButton, Tooltip } from "@mui/material";

import { RiVerifiedBadgeLine } from "react-icons/ri";
import { Add, ArrowDropUp, ArrowUpward } from "@mui/icons-material";
import AddNewAbility from "./AddNewAbility";

interface NewAbilityLevelsInterface {
  levels: { damage: number; level: number }[];
}

function PokemonCard({
  pokemon,
  className,
  width,
}: {
  className?: string;
  width?: number;
  pokemon: Pokemon;
}) {
  const dispatch = useDispatch();
  const [showAbilities, setShowAbilities] = useState<boolean>(false);
  const [pokemonNameInput, setPokemonNameInput] = useState<string>("");
  const [showPokemonNameInput, setShowPokemonNameInput] =
    useState<boolean>(false);

  const [showNewAbilityInputs, setShowNewAbilityInputs] =
    useState<boolean>(false);

  const { name, type, weight, abilities } = pokemon;

  const {
    pokemon: { pokemons },
  } = useAppSelector((state) => ({
    pokemon: state.pokemon,
  }));

  useEffect(() => {
    if (name) {
      setPokemonNameInput(name);
    }
  }, [name]);

  const handleShowAbilities = () => {
    setShowAbilities((prev) => !prev);
  };

  const handleSavePokemonNewName = () => {
    dispatch(
      editPokemonName({ pokemonName: name, pokemonNewName: pokemonNameInput })
    );
    setShowPokemonNameInput(false);
  };

  return (
    <div className="flex flex-row ">
      <div
        className={`${className} bg-netlflix-red relative rounded-md  p-2 font-semibold text-white`}
        style={{
          width,
        }}
      >
        <AiOutlineClose
          onClick={() => dispatch(removePokemonFromMyList(pokemon))}
          className="text-white absolute right-2 hover:cursor-pointer"
        />

        {!showPokemonNameInput && (
          <h3
            onClick={() => setShowPokemonNameInput(true)}
            className="text-lg text-yellow-300 w-fit cursor-pointer"
          >
            {name}
          </h3>
        )}

        {showPokemonNameInput && (
          <div className="flex flex-row items-center">
            <input
              type="text"
              value={pokemonNameInput}
              onChange={(e) => setPokemonNameInput(e.target.value)}
              className="text-black p-0.5"
            />
            <RiVerifiedBadgeLine
              onClick={handleSavePokemonNewName}
              className="text-white ml-2 text-[30px] hover:text-gray-300 transform ease-out duration-300 cursor-pointer"
            />
          </div>
        )}
        <p>{type}</p>
        <p className="text-purple-300">
          Weight: <span className="text-cyan-400">{weight}</span>
        </p>

        <Button onClick={handleShowAbilities} variant="contained">
          {showAbilities ? "Hide" : "Show abilities"}
        </Button>

        {showAbilities && (
          <div className="flex flex-col ">
            {abilities.map(({ ability, levels }, idx) => {
              return (
                <div key={idx} className="mt-4 ">
                  <h4
                    onClick={() =>
                      dispatch(
                        removePokemonAbility({
                          pokemonName: name,
                          abilityName: ability.name,
                        })
                      )
                    }
                    className="mb-2 w-fit  cursor-pointer"
                  >
                    • {ability.name}
                  </h4>
                  {levels.map((level) => {
                    return (
                      <span
                        key={level.level}
                        className="ml-2 bg-white text-black cursor-pointer"
                        onClick={() => {
                          dispatch(
                            removePokemonAbilityLevel({
                              pokemonName: name,
                              abilityName: ability.name,
                              levelDMG: level.level,
                            })
                          );
                        }}
                      >
                        {level.level} -{" "}
                        <span className="text-purple-500">{level.damage}</span>
                        <span className="text-red-600">DMG</span>
                      </span>
                    );
                  })}
                </div>
              );
            })}
            <div className="mt-2 flex justify-center">
              <Tooltip
                className="text-center"
                placement="top"
                title={`${
                  showNewAbilityInputs ? "Minimize" : "Add new ability"
                }`}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -14],
                        },
                      },
                    ],
                  },
                }}
              >
                <IconButton
                  onClick={() =>
                    setShowNewAbilityInputs(
                      (showNewAbilityInputs) => !showNewAbilityInputs
                    )
                  }
                >
                  {showNewAbilityInputs ? (
                    <ArrowDropUp className="text-white text-[30px]" />
                  ) : (
                    <Add className="text-white text-[30px]" />
                  )}
                </IconButton>
              </Tooltip>
            </div>

            {showNewAbilityInputs && <AddNewAbility pokemon={pokemon} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
