import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { useAppDispatch } from "../redux/store";
import { Pokemon } from "../redux/interfaces/pokemon.interface";
import { addPokemonNewAbility } from "../redux/reducer/pokemon.reducer";
import { Alert } from "@mui/material";

interface AbilityInterface {
  level: number;
  damage: number | null;
}

function AddNewAbility({ pokemon }: { pokemon: Pokemon }) {
  const dispatch = useAppDispatch();

  const { name } = pokemon;

  const [addNewAbilityName, setAddNewAbilityName] = useState<string>("");

  const [addNewAbilityLv1Dmg, setAddNewAbilityLv1Dmg] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [addNewAbilityLv2Dmg, setAddNewAbilityLv2Dmg] = useState<
    string | number | readonly string[] | undefined
  >("");
  const [addNewAbilityLv3Dmg, setAddNewAbilityLv3Dmg] = useState<
    string | number | readonly string[] | undefined
  >("");

  const [pokemonAbilityAlreadyExists, setPokemonAbilityAlreadyExists] =
    useState<string>("");

  const handleSubmitNewAbility = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const pokemonAbilityNameAlreadyInList = pokemon.abilities.some(
      (abilitiy) => abilitiy.ability.name === addNewAbilityName
    );

    if (pokemonAbilityNameAlreadyInList) {
      setPokemonAbilityAlreadyExists(
        "Aceasta abilitate exista deja! Alege alt nume."
      );
      return;
    }

    dispatch(
      addPokemonNewAbility({
        pokemonName: name,
        ability: {
          ability: { name: addNewAbilityName },
          is_hidden: false,
          levels: [
            { damage: addNewAbilityLv1Dmg, level: 1 },
            { damage: addNewAbilityLv2Dmg, level: 2 },
            { damage: addNewAbilityLv3Dmg, level: 3 },
          ],
          slot: 99,
        },
      })
    );

    setPokemonAbilityAlreadyExists("");
    setAddNewAbilityName("");
    setAddNewAbilityLv1Dmg("");
    setAddNewAbilityLv2Dmg("");
    setAddNewAbilityLv3Dmg("");
  };

  useEffect(() => {
    if (pokemonAbilityAlreadyExists) {
      setTimeout(() => {
        setPokemonAbilityAlreadyExists("");
      }, 3000);
    }
  }, [pokemonAbilityAlreadyExists]);

  return (
    <form className="flex flex-col justify-center">
      <InputComponent
        inputType="text"
        inputId="abilityName"
        labelForInputId="abilityName"
        labelName="Ability name"
        inputValue={addNewAbilityName}
        onChange={(e) => setAddNewAbilityName(e.target.value)}
      />

      <InputComponent
        inputType="number"
        inputId="abilityLv1DMG"
        labelForInputId="abilityLv1DMG"
        labelName="Ability level 1 DMG"
        inputValue={addNewAbilityLv1Dmg}
        onChange={(e) => setAddNewAbilityLv1Dmg(e.target.value)}
      />

      <InputComponent
        inputType="number"
        inputId="abilityLv2DMG"
        labelForInputId="abilityLv2DMG"
        labelName="Ability level 2 DMG"
        inputValue={addNewAbilityLv2Dmg}
        onChange={(e) => setAddNewAbilityLv2Dmg(e.target.value)}
      />

      <InputComponent
        inputType="number"
        inputId="abilityLv3DMG"
        labelForInputId="abilityLv3DMG"
        labelName="Ability level 3 DMG"
        inputValue={addNewAbilityLv3Dmg}
        onChange={(e) => setAddNewAbilityLv3Dmg(e.target.value)}
      />

      <button
        onClick={(e) => handleSubmitNewAbility(e)}
        className="w-fit border-2 border-white p-1 my-2 hover:text-red-300 hover:border-red-300 transform ease-in-out duration-300"
      >
        Adauga
      </button>

      {pokemonAbilityAlreadyExists && (
        <Alert color="warning" severity="warning">
          {pokemonAbilityAlreadyExists}
        </Alert>
      )}
    </form>
  );
}

export default AddNewAbility;
