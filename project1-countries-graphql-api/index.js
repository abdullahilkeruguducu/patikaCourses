import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


const typeDefs = `
  type Country {
    id: ID
    name: String
    language: [String]
    language_id: [String]
    continent: String
    continent_id: String
  }

  type Language {
    id: ID
    name: String
    countries: [String]
  }

  type Continent {
    id: ID
    name: String
    countries: [String]
    languages: [String]
  }

  type Query {
    countries: [Country]
    country(id: ID): Country

    languages: [Language]
    language(id: ID): Language

    continents: [Continent]
    continent(id: ID): Continent
  }

`;

const resolvers = {
  Query: {
    countries: () => countries,
    country: (parent, args) => {
      const country = countries.find((country) => country.id === args.id);
      return country;
    },
    languages: () => languages,
    language: (parent, args) => {
      const language = languages.find((language) => language.id === args.id);
      return language;
    },
    continents: () => continents,
    continent: (parent, args) => {
      const continent = continents.find(
        (continent) => continent.id === args.id
      );
      return continent;
    },
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
