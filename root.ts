import { ApolloServer, IResolvers } from "apollo-server-koa";
import type { DocumentNode } from "graphql";
import type { Context as KoaContext } from "koa";

import { ApolloContext } from "./types/ApolloContext";

const typeDefs: DocumentNode[] = [];

const resolvers: IResolvers<any, {}> = {};

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
  context: async({ ctx}: Request): Promise<ApolloContext> => {
    return {};
  }
});

export default server;
