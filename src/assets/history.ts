type Game = {
  name: string;
  // TODO: steam link, playtime, picture
}

export const gameList = {
  night_in_the_woods: {
    name: "Night in the Woods",
  },
  kingdom_new_lands: {
    name: "Kingdom: New Lands",
  },
  moonlighter: {
    name: "Moonlighter",
  },
  return_of_the_obra_dinn: {
    name: "Return of the Obra Dinn",
  },
  gris: {
    name: "Gris",
  },
  aviary_attorney: {
    name: "Aviary Attorney",
  },
  hypnospace_outlaw: {
    name: "Hypnospace Outlaw",
  },
  transistor: {
    name: "Transistor",
  },
  streets_of_rogue: {
    name: "Streets of Rogue",
  },
  eliza: {
    name: "Eliza",
  },
  disco_elysium: {
    name: "Disco Elysium",
  },
  pokemon_sword_shield: {
    name: "Pokemon Sword/Shield",
  },
  choice_of_robots: {
    name: "Choice of Robots",
  },
  life_is_strange: {
    name: "Life Is Strange",
  },
  a_short_hike: {
    name: "A Short Hike",
  },
  the_hex: {
    name: "The Hex",
  },
  nineteen_eighty_x: {
    name: "198X",
  },
  kentucky_route_zero: {
    name: "Kentucky Route Zero",
  },
  beglitched: {
    name: "Beglitched",
  },
  a_new_life: {
    name: "A New Life",
  },
  strawberry_cubes: {
    name: "Strawberry Cubes",
  },
  one_shot: {
    name: "One Shot",
  },
  quadrilateral_cowboy: {
    name: "Quadrilateral Cowboy",
  },
  the_outer_wilds: {
    name: "The Outer Wilds",
  },
  paradise_killer: {
    name: "Paradise Killer",
  },
  townscaper: {
    name: "Townscaper",
  },
  what_remains_of_edith_finch: {
    name: "What Remains of Edith Finch",
  },
  the_last_campfire: {
    name: "The Last Campfire",
  },
  hades: {
    name: "Hades",
  },
  signs_of_the_sojourner: {
    name: "Signs of the Sojourner",
  },
  wide_ocean_big_jacket: {
    name: "Wide Ocean Big Jacket",
  },
  omori: {
    name: "Omori",
  },
  if_found: {
    name: "If Found...",
  },
  later_alligator: {
    name: "Later Alligator",
  },
  call_of_the_sea: {
    name: "Call of the Sea",
  },
  cloudpunk: {
    name: "Cloudpunk",
  },
  ynglet: {
    name: "Ynglet",
  },
  astalon: {
    name: "Astalon",
  },
  chicory: {
    name: "Chicory",
  },
  umurangi_generation: {
    name: "Umurangi Generation",
  },
  psychonauts_2: {
    name: "Psychonauts 2",
  },
  sable: {
    name: "Sable",
  },
  inscryption: {
    name: "Inscryption",
  },
  unpacking: {
    name: "Unpacking",
  },
  sunshine_heavy_industries: {
    name: "Sunshine Heavy Industries"
  },
  loop_hero: {
    name: "Loop Hero",
  },
  life_is_strange_true_colors: {
    name: "Life Is Strange: True Colors",
  },
  perfect_tides: {
    name: "Perfect Tides",
  },
  tunic: {
    name: "TUNIC",
  },
  citizen_sleeper: {
    name: "Citizen Sleeper",
  },
  norco: {
    name: "NORCO",
  },
  stray: {
    name: "Stray",
  },
  the_pathless: {
    name: "The Pathless",
  },
  last_call_bbs: {
    name: "Last Call BBS",
  },
  immortality: {
    name: "Immortality",
  },
  potionomics: {
    name: "Potionomics",
  },
  return_to_monkey_island: {
    name: "Return to Monkey Island"
  },
  signalis: {
    name: "Signalis",
  },
  melatonin: {
    name: "Melatonin",
  },
  pentiment: {
    name: "Pentiment",
  },
  season_a_letter_to_the_future: {
    name: "Season: A letter to the future",
  },
  dredge: {
    name: "Dredge",
  },
  the_gostak: {
    name: "The Gostak",
  },
  wall_world: {
    name: "Wall World",
  },
  storyteller: {
    name: "Storyteller",
  },
  citizen_sleeper_flux: {
    name: "Citizen Sleeper: Flux DLC",
  },
  citizen_sleeper_refuge: {
    name: "Citizen Sleeper: Refuge DLC",
  },
  citizen_sleeper_purge: {
    name: "Citizen Sleeper: Purge DLC",
  },
  tchia: {
    name: "Tchia",
  },
  planet_of_lana: {
    name: "Planet of Lana",
  },
  dordogne: {
    name: "Dordogne",
  },
  viewfinder: {
    name: "Viewfinder",
  },
  desta: {
    name: "Desta",
  },
  the_cosmic_wheel_sisterhood: {
    name: "The Cosmic Wheel Sisterhood",
  },
} as const satisfies { [key: string]: Game };

type GameKey = keyof typeof gameList;

type Meeting = {
  date: string;
  title: string;
  location?: string;
  games: GameKey[];
  alternate_side_games?: GameKey[];
}

export const meetings: Meeting[] = [
    {
        "date": "2018-03-30",
        "title": "Video Game Club 1.0",
        "location": "Hinodeya Ramen",
        "games": ["night_in_the_woods"]
    },
    {
        "date": "2018-10-12",
        "title": "Video Game Club 2.0",
        "location": "Thai Idea",
        "games": ["kingdom_new_lands"]
    },
    {
      "date": "2018-11-16",
      "title": "Video Game Club 3.0",
      "location": "Walter\"s",
      "games": ["moonlighter"]
    },
    {
      "date": "2018-12-14",
      "title": "Video Game Club 4.0",
      "location": "Walter's",
      "games": ["return_of_the_obra_dinn"]
    },
    {
      "date": "2019-02-01",
      "title": "Video Game Club 5.0",
      "location": "City Beer Store",
      "games": ["gris"]
    },
    {
      "date": "2019-04-05",
      "title": "Video Game Club 6.0",
      "location": "Orenchi Beyond",
      "games": ["aviary_attorney"]
    },
    {
      "date": "2019-06-27",
      "title": "Video Game Club 7.0",
      "location": "Fig and Thistle",
      "games": ["hypnospace_outlaw"]
    },
    {
      "date": "2019-08-07",
      "title": "Video Game Club 8.0",
      "location": "Petit Marlowe",
      "games": ["transistor"]
    },
    {
      "date": "2019-09-26",
      "title": "Video Game Club 9.0",
      "location": "The Riddler",
      "games": ["streets_of_rogue"]
    },
    {
      "date": "2019-10-25",
      "title": "Video Game Club 11.0",
      "location": "Sociale",
      "games": ["eliza"]
    },
    {
      "date": "2019-12-13",
      "title": "Video Game Club 12.0",
      "location": "Nojo Ramen Tavern",
      "games": ["disco_elysium"]
    },
    {
      "date": "2020-01-13",
      "title": "Video Game Club 13.0",
      "location": "Great Gold",
      "games": ["pokemon_sword_shield", "choice_of_robots"]
    },
    {
      "date": "2020-03-12",
      "title": "Video Game Club 14.0",
      "location": "Delfina",
      "games": ["life_is_strange", "a_short_hike"]
    },
    {
      "date": "2020-04-24",
      "title": "Video Game Club 15.0",
      "games": ["the_hex", "nineteen_eighty_x"]
    },
    {
      "date": "2020-06-19",
      "title": "Video Game Club 16.0",
      "games": ["kentucky_route_zero"]
    },
    {
      "date": "2020-08-07",
      "title": "Video Game Club 17.0",
      "games": [
          "beglitched",
          "a_new_life",
          "strawberry_cubes",
          "one_shot",
          "quadrilateral_cowboy"
      ],
    },
    {
      "date": "2020-09-11",
      "title": "Video Game Club 18.0",
      "games": ["the_outer_wilds"]
    },
    {
      "date": "2020-11-06",
      "title": "Video Game Club 19.0",
      "games": ["paradise_killer", "townscaper"]
    },
    {
      "date": "2020-12-04",
      "title": "Video Game Club 20.0",
      "games": ["what_remains_of_edith_finch", "the_last_campfire"]
    },
    {
      "date": "2021-01-15",
      "title": "Video Game Club 21.0",
      "games": ["hades"]
    },
    {
      "date": "2021-02-26",
      "title": "Video Game Club 22.0",
      "games": ["signs_of_the_sojourner", "wide_ocean_big_jacket"]
    },
    {
      "date": "2021-04-09",
      "title": "Video Game Club 23.0",
      "games": ["omori", "if_found"]
    },
    {
      "date": "2021-05-14",
      "title": "Video Game Club 24.0",
      "games": ["later_alligator", "call_of_the_sea"]
    },
    {
      "date": "2021-06-11",
      "title": "Video Game Club 25.0",
      "games": ["cloudpunk"]
    },
    {
      "date": "2021-07-16",
      "title": "Video Game Club 26.0",
      "games": ["ynglet", "astalon"]
    },
    {
      "date": "2021-08-22",
      "title": "Video Game Club 27.0",
      "games": ["chicory"]
    },
    {
      "date": "2021-09-12",
      "title": "Video Game Club 28.0",
      "games": ["umurangi_generation"]
    },
    {
      "date": "2021-10-13",
      "title": "Video Game Club 29.0",
      "location": "Poesia",
      "games": ["psychonauts_2"]
    },
    {
      "date": "2021-11-14",
      "title": "Video Game Club 30.0",
      "games": ["sable"]
    },
    {
      "date": "2021-12-05",
      "title": "Video Game Club 31.0",
      "games": ["inscryption", "unpacking"]
    },
    {
      "date": "2022-01-02",
      "title": "Video Game Club 32.0",
      "games": ["sunshine_heavy_industries"]
    },
    {
      "date": "2022-01-30",
      "title": "Video Game Club 33.0",
      "games": ["loop_hero"]
    },
    {
      "date": "2022-02-27",
      "title": "Video Game Club 34.0",
      "games": ["life_is_strange_true_colors"]
    },
    {
      "date": "2022-03-27",
      "title": "Video Game Club 35.0",
      "games": ["perfect_tides"]
    },
    {
      "date": "2022-05-08",
      "title": "Video Game Club 36.0",
      "games": ["tunic"]
    },
    {
      "date": "2022-06-12",
      "title": "Video Game Club 37.0",
      "games": ["citizen_sleeper"]
    },
    {
      "date": "2022-07-17",
      "title": "Video Game Club 38.0",
      "games": ["norco"]
    },
    {
      "date": "2022-08-21",
      "title": "Video Game Club 39.0",
      "games": ["stray"]
    },
    {
      "date": "2022-10-02",
      "title": "Video Game Club 40.0",
      "games": ["the_pathless", "last_call_bbs"]
    },
    {
      "date": "2022-11-06",
      "title": "Video Game Club 41.0",
      "games": ["immortality"]
    },
    {
      "date": "2022-12-04",
      "title": "Video Game Club 42.0",
      "games": ["potionomics"]
    },
    {
      "date": "2023-01-08",
      "title": "Video Game Club 43.0",
      "games": ["return_to_monkey_island"]
    },
    {
      "date": "2023-02-05",
      "title": "Video Game Club 44.0",
      "games": ["signalis", "melatonin"]
    },
    {
      "date": "2023-03-12",
      "title": "Video Game Club 45.0",
      "games": ["pentiment"]
    },
    {
      "date": "2023-04-16",
      "title": "Video Game Club 46.0",
      "games": ["season_a_letter_to_the_future"]
    },
    {
      "date": "2023-05-14",
      "title": "Video Game Club 47.0",
      "games": ["dredge", "the_gostak"],
      // TODO: were these REALLY side games <_<
      "alternate_side_games": ["wall_world", "storyteller", "citizen_sleeper_flux", "citizen_sleeper_refuge", "citizen_sleeper_purge"]
    },
    {
      "date": "2023-06-25",
      "title": "Video Game Club 48.0",
      "games": ["tchia", "citizen_sleeper_flux", "citizen_sleeper_refuge", "citizen_sleeper_purge"]
    },
    {
      "date": "2023-07-23",
      "title": "Video Game Club 49.0",
      "games": ["planet_of_lana", "dordogne"]
    },
    {
      "date": "2023-09-03",
      "title": "Video Game Club 50.0",
      "games": ["viewfinder", "desta"]
    },
    {
      "date": "2023-10-01",
      "title": "Video Game Club 51.0",
      "games": ["the_cosmic_wheel_sisterhood"]
    }
];