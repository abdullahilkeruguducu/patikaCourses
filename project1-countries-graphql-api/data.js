const countries = [
  {
    id: "1",
    name: "Turkey",
    language: ["Turkish"],
    language_id: ["1"],
    continent: "Asia",
    continent_id: "1",
  },
  {
    id: "2",
    name: "France",
    language: ["French"],
    language_id: ["2"],
    continent: "Europe",
    continent_id: "2",
  },
  {
    id: "3",
    name: "China",
    language: ["Mandarin"],
    language_id: ["3"],
    continent: "Asia",
    continent_id: "1",
  },
  {
    id: "4",
    name: "Brazil",
    language: ["Portuguese"],
    language_id: ["4"],
    continent: "South America",
    continent_id: "3",
  },
  {
    id: "5",
    name: "Australia",
    language: ["English"],
    language_id: ["5"],
    continent: "Oceania",
    continent_id: "4",
  },
];

const languages = [
  {
    id: "1",
    name: "Turkish",
    countries: ["Turkey"],
  },
  {
    id: "2",
    name: "French",
    countries: ["France"],
  },
  {
    id: "3",
    name: "Mandarin",
    countries: ["China"],
  },
  {
    id: "4",
    name: "Portuguese",
    countries: ["Brazil"],
  },
  {
    id: "5",
    name: "English",
    countries: ["Australia"],
  },
];

const continents = [
  {
    id: "1",
    name: "Asia",
    countries: ["Turkey", "China"],
    languages: ["Turkish", "Mandarin"],
  },
  {
    id: "2",
    name: "Europe",
    countries: ["France"],
    languages: ["French"],
  },
  {
    id: "3",
    name: "South America",
    countries: ["Brazil"],
    languages: ["Portuguese"],
  },
  {
    id: "4",
    name: "Oceania",
    countries: ["Australia"],
    languages: ["English"],
  },
];

module.exports = { countries, languages, continents };
