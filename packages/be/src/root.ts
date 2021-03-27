import { ApolloServer, IResolvers } from "apollo-server-koa";
import { DocumentNode } from "graphql";
import { Context as KoaContext } from "koa";

import { ApolloContext } from "./types/ApolloContext";
import * as query from "./query";
import * as mutations from "./mutations";
import * as relay from "./schemas/relay";
import * as city from "./schemas/city";
import * as marina from "./schemas/marina";
import * as photo from "./schemas/photo";
import * as amenity from "./schemas/amenity";
import * as country from "./schemas/country";
// import * as mutation from "./mutation";
import * as node from "./query/node";

const typeDefs: DocumentNode[] = [
  // meta
  relay.schema,

  country.schema,
  city.schema,
  photo.schema,
  amenity.schema,
  marina.schema,

  query.schema,
  mutations.schema
];

const resolvers: IResolvers<any, {}> = {
  // meta
  [node.TYPE]: node.resolver,

  [city.TYPE]: city.resolver,
  [country.TYPE]: country.resolver,
  [photo.TYPE]: photo.resolver,
  [marina.TYPE]: marina.resolver,
  [amenity.TYPE]: amenity.resolver,

  Query: query.resolver,
  Mutation: mutations.resolver
};

type Request = {
  ctx: KoaContext;
};

const server = new ApolloServer({
  uploads: false,
  typeDefs,
  resolvers,
  schemaDirectives: {},
  playground: {
    settings: {
      "schema.polling.enable": true
    }
  },
  introspection: true,
  debug: true,
  context: async ({ ctx }: Request): Promise<ApolloContext> => {
    return {};
  }
});

export default server;
