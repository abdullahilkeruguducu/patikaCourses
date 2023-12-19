import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const countries = [
  { id: 1, name: "Nigeria", code: "EN", continent_code: "AF" },
  { id: 2, name: "Japan", code: "JP", continent_code: "AS" },
  { id: 3, name: "Brazil", code: "PT", continent_code: "SA" },
  { id: 4, name: "Australia", code: "EN", continent_code: "OC" },
  { id: 5, name: "France", code: "FR", continent_code: "EU" },
  { id: 6, name: "Germany", code: "DE", continent_code: "EU" },
  { id: 7, name: "Turkiye", code: "TR", continent_code: "EU" },

];

const languages = [
  { id: 1, name: "Japanese", code: "JP", continent_code: "AS" },
  { id: 2, name: "Portuguese", code: "PT", continent_code: "SA" },
  { id: 3, name: "English", code: "EN", continent_code: "OC" },
  { id: 4, name: "French", code: "FR", continent_code: "EU" },
  { id: 5, name: "German", code: "DE", continent_code: "EU" },
  { id: 6, name: "Turkish", code: "TR", continent_code: "EU" },

];

const continents = [
  { id: 1, name: "Africa", code: "AF" },
  { id: 2, name: "Antarctica", code: "AN" },
  { id: 3, name: "Asia", code: "AS" },
  { id: 4, name: "Europe", code: "EU" },
  { id: 5, name: "North America", code: "NA" },
  { id: 6, name: "Oceania", code: "OC" },
  { id: 7, name: "South America", code: "SA" },
];

const typeDefs = `
type Country {
  id: ID!
  name: String!
  code: String!
  language: Language
  continent: Continent
  continent_code: String
}

type Language {
  id: ID!
  name: String!
  code: String!
  country: Country
  continent: Continent
  continent_code: String
}

type Continent {
  id: ID!
  name: String!
  code: String!
  countries: [Country]
}

type Query {
  countries: [Country!]
  country(code: String!): Country!

  languages: [Language!]
  language(code: String!): Language!

  continents: [Continent!]
  continent(code: String!): Continent!
}

`;

const resolvers = {
  Query: {
    countries: () => countries,
    country: (parent, args) =>
      countries.find((country) => country.code === args.code),

    languages: () => languages,
    language: (parent, args) =>
      languages.find((language) => language.code === args.code),

    continents: () => continents,
    continent: (parent, args) =>
      continents.find((continent) => continent.code === args.code),
  },

  Country: {
    language: (parent) =>
      languages.find((language) => language.code === parent.code),
    continent: (parent) =>
      continents.find((continent) => continent.code === parent.continent_code),
  },

  Language: {
    country: (parent) =>
      countries.find((country) => country.code === parent.code),
    continent: (parent) =>
      continents.find((continent) => continent.code === parent.continent_code),
  },

  Continent: {
    countries: (parent) =>
      countries.filter((country) => country.continent_code === parent.code),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
