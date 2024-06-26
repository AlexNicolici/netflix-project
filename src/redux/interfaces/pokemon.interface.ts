export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
  levels: {
    damage: number;
    level: number;
  }[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  weight: number;
  type: string;
  abilities: Ability[];
  stats: Stat[];
}
